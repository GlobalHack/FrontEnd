import React, {PropTypes} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {SchemaForm} from 'react-schema-form';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/consumerActions';
import ConsumerCardList from '../consumer/ConsumerCardList';
import _ from 'lodash';

let schemaForm = {
  "formId" : "com.cemaritan.app.consumer.create",
  "version": 1,
  "action" : [
    {
      "category": "consumer",
      "name"    : "createconsumer",
      "readOnly": false,
      "title"   : "Create"
    }
  ],
  "schema" : {
    "type"      : "object",
    "title"     : "Find/Create Consumer",
    "required"  : [
      "firstName",
      "lastName",
      "ssn",
      "dateOfBirth"
    ],
    "properties": {
      "firstName"  : {
        "title": "First Name",
        "type" : "string"
      },
      "lastName"   : {
        "title": "Last Name",
        "type" : "string"
      },
      "ssn"        : {
        "title": "Social Security Number",
        "type" : "string"
      },
      "dateOfBirth": {
        "title": "Date Of Birth",
        "type" : "date"
      }
    }
  },
  "form"   : [
    "firstName",
    "lastName",
    {
      key        : "ssn",
      placeholder: 'XXX-XX-XXXX'
    },
    {key: "dateOfBirth"}
  ]
};

class ConsumerForm extends React.Component {
  componentWillMount() {
    this.props.actions.loadConsumers();
  }

  pickConsumer = (id) => {
    // console.log(id);
    let consumer = _.find(this.props.consumers, {id});
    // console.log(consumer);
    this.props.onSwitchConsumerForm(consumer);
  };

  render() {
    const {consumers, consumerState, onUpdateConsumerForm} = this.props;
    console.log(consumerState);
    return (
      <Row>
        <Col xs={12} sm={6}>{consumerState.firstName}
          <SchemaForm
            schema={schemaForm.schema}
            form={schemaForm.form}
            model={consumerState}
            onModelChange={onUpdateConsumerForm}
          />
        </Col>
        <Col xs={12} sm={6}>
          <ConsumerCardList consumers={consumers} onPickConsumer={this.pickConsumer} />
        </Col>
      </Row>
    );
  }
}

ConsumerForm.propTypes = {
  consumerState       : PropTypes.object.isRequired,
  onUpdateConsumerForm: PropTypes.func.isRequired,
  consumers           : PropTypes.array.isRequired
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