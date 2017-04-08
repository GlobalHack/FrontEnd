import React, {PropTypes} from 'react';
var {SchemaForm} = require('react-schema-form');

var schemaForm = {
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
      placeholder: 'XXX-XX-XXXX'
    },
    {key: "dateOfBirth"},
  ]
};

class ConsumerForm extends React.Component {

  render() {
    const {consumerState, onUpdateConsumerForm} = this.props;

    return (
      <SchemaForm schema={schemaForm.schema} form={schemaForm.form} model={consumerState}
                  onModelChange={onUpdateConsumerForm}/>
    );
  }
}
;

ConsumerForm.propTypes = {
  customerState: PropTypes.object,
  onUpdateCustomerForm: PropTypes.func
};

export default ConsumerForm;
