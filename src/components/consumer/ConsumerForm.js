import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {SchemaForm} from 'react-schema-form';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/consumerActions';
import ConsumerCard from '../consumer/ConsumerCard';
import RefusableText from '../base/RefusableText';
import RefusableSSN from '../base/RefusableSSN';

let schemaForm = {
  "formId": "com.cemaritan.app.consumer.create",
  "version": 1,
  "action": [
    {
      "category": "consumer",
      "name": "createconsumer",
      "readOnly": false,
      "title": "Create"
    }
  ],
  "schema": {
    "type": "object",
    "title": "Find/Create Consumer",
    "required": [
      "firstName",
      "lastName",
      "ssn",
      "dateOfBirth"
    ],
    "properties": {
      "firstName": {
        "title": "First Name",
        "type": "string"
      },
      "lastName": {
        "title": "Last Name",
        "type": "string"
      },
      "ssn": {
        "title": "Social Security Number",
        "type": "string"
      },
      "dateOfBirth": {
        "title": "Date Of Birth",
        "type": "date"
      }
    }
  },
  "form": [
    "firstName",
    "lastName",
    {
      key: "ssn",
      placeholder: 'XXX-XX-XXXX',
      type: "RefusableSSN"
    },
    {key: "dateOfBirth"}
  ]
};

class ConsumerForm extends React.Component {

  template = () => {
    let newConsumerState = Object.assign({}, this.props.consumerState);
    newConsumerState.id = null;
    this.props.onSwitchConsumerForm(newConsumerState);
  };

  clear = () => {
    this.props.onSwitchConsumerForm({});
  };

  render() {
    const {consumerState, onUpdateConsumerForm} = this.props;
    // console.log(consumerState);
    // consumerState.dateOfBirth = "2017-04-18";
    let mapper = {
      "RefusableSSN": RefusableSSN,
      "text": RefusableText
    };
    if (consumerState.id) {
      return (
        <ConsumerCard
          consumerState={consumerState}
          actions={
            <Toolbar style={{marginTop: 20}}>
              <ToolbarGroup>
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton
                  label="clear"
                  secondary={true}
                  onTouchTap={this.clear}
                />
              </ToolbarGroup>
            </Toolbar>
          }
        />
      );
    } else {
      return (
        <SchemaForm
          schema={schemaForm.schema}
          form={schemaForm.form}
          model={consumerState}
          onModelChange={onUpdateConsumerForm}
          mapper={mapper}
        />
      );
    }
  }
}

ConsumerForm.propTypes = {
  consumerState: PropTypes.object.isRequired,
  onUpdateConsumerForm: PropTypes.func.isRequired,
  consumers: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    consumers: state.consumers
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerForm);