import React, {PropTypes} from 'react';
import {SchemaForm} from 'react-schema-form';
import {Row, Col} from 'react-flexbox-grid';
import ConsumerCardList from '../consumer/ConsumerCardList';

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
      placeholder: 'XXX-XX-XXXX'
    },
    {key: "dateOfBirth"},
  ]
};

class ConsumerForm extends React.Component {

  render() {
    const {consumerState, onUpdateConsumerForm} = this.props;
    // console.log(consumerState);
    return (
      <Row>
        <Col xs={12} sm={6}>
          <SchemaForm
            schema={schemaForm.schema}
            form={schemaForm.form}
            model={consumerState}
            onModelChange={onUpdateConsumerForm}
          />
        </Col>
        <Col xs={12} sm={6}>
          <ConsumerCardList consumers={[{id:1,firstName:'joe',lastName:'shmoe'}]} />
        </Col>
      </Row>
    );
  }
}
;

ConsumerForm.propTypes = {
  consumerState: PropTypes.object.isRequired,
  onUpdateConsumerForm: PropTypes.func.isRequired
};

export default ConsumerForm;
