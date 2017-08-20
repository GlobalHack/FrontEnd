import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { SchemaForm } from 'react-schema-form';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/consumerActions';
import ConsumerCard from '../consumer/ConsumerCard';
import RefusableText from '../base/RefusableText';
import RefusableSSN from '../base/RefusableSSN';
import RefusableYear from '../base/RefusableYear';
import RefusableDate from '../base/RefusableDate';
import RefusableDateString from '../base/RefusableDateString';
import RefusableYouth from '../base/RefusableYouth';
import RefusableDV from '../base/RefusableDV';

const schemaForm = {
  formId: 'com.cemaritan.app.consumer.create',
  version: 1,
  schema: {
    type: 'object',
    title: 'Find/Create Consumer',
    properties: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      ssn: {
        title: 'Social Security Number',
        type: 'string',
      },
      dateOfBirth: {
        title: 'Date Of Birth',
        type: 'string',
      },
      domesticViolence: {
        title: 'Domestic Violence',
        type: 'string',
      },
      youth: {
        title: 'Youth',
        type: 'string',
      },
    },
  },
  form: [
    'firstName',
    'lastName',
    {
      key: 'ssn',
      placeholder: 'XXX-XX-XXXX',
      type: 'RefusableSSN',
    },
    {
      key: 'dateOfBirth',
      type: 'RefusableDateString',
    },
    {
      key: 'domesticViolence',
      type: 'RefusableDV',
    },
    {
      key: 'youth',
      type: 'RefusableYouth',
    },
  ],
};

class ConsumerForm extends React.Component {
  template = () => {
    const newConsumerState = Object.assign({}, this.props.consumerState);
    newConsumerState.id = null;
    this.props.onSwitchConsumerForm(newConsumerState);
  };

  submit = () => {
    this.props.onSubmitConsumerForm(this.props.consumerState);
  };

  clear = () => {
    this.props.onSwitchConsumerForm({});
  };

  render() {
    const { consumerState, onUpdateConsumerForm } = this.props;
    // console.log(consumerState);
    // consumerState.dateOfBirth = "2017-04-18";
    const mapper = {
      RefusableSSN,
      text: RefusableText,
      RefusableYear,
      RefusableDate,
      RefusableDV,
      RefusableYouth,
      RefusableDateString,
    };
    if (consumerState.id) {
      return (
        <ConsumerCard
          consumerState={consumerState}
          actions={
            <Toolbar style={{ marginTop: 20 }}>
              <ToolbarGroup />
              <ToolbarGroup>
                <RaisedButton
                  label="clear"
                  secondary
                  onTouchTap={this.clear}
                />
              </ToolbarGroup>
            </Toolbar>
          }
        />
      );
    }
    return (
      <div>
        <SchemaForm
          schema={schemaForm.schema}
          form={schemaForm.form}
          model={consumerState}
          onModelChange={onUpdateConsumerForm}
          mapper={mapper}
        />
        <RaisedButton
          label="Save consumer"
          primary
          onTouchTap={this.submit}
        />
      </div>
    );
  }
}

ConsumerForm.propTypes = {
  consumerState: PropTypes.object.isRequired,
  onUpdateConsumerForm: PropTypes.func.isRequired,
  consumers: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    consumers: state.consumers,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerForm);
