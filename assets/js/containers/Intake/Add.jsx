import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "react-jsonschema-form";

/* COMPONENTS --- */
import PhoneNumber from 'components/PhoneNumber'

const schema = {
  title: "Todo",
  type: "object",
  required: ["title", "phone"],
  properties: {
    title: {
        type: "string",
        title: "Title"
    },
    phone: {
        type: "string",
        title: "Phone Number",
        default: "",
        "minLength": 10,
        "pattern": ".*(\\d{3}).*(\\d{3}).*(\\d{4})"
    },
    "integerRange": {
      "title": "Integer Range Example",
      "type": "integer",
      "minimum": 42,
      "maximum": 100
    },
    done: {
        type: "boolean",
        title: "Done?",
        default: false
    }
  }
}

const widgets = {
  phoneNumber: PhoneNumber
}

const uiSchema = {
    "title": {
        "ui:placeholder": "Add Form Title"
    },
    "integerRange": {
        "ui:widget": "range"
    },
    "phone": {
        "ui:widget": "phoneNumber",
        "ui:placeholder": "(555) 555-5555"
    }
}

const formData = {
  title: "First task",
  done: true
}


class IntakeAdd extends Component {
  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleError(){
      console.log("there is an error!")
      console.log(arguments)
  }

  handleSubmit(formData){
      alert('form data logged in console')
      console.log(formData.formData)
  }

  render() {
    return (
        <div>
            <Form
                schema={ schema }
                uiSchema={ uiSchema }
                widgets={ widgets }
                onError={ this.handleError }
                onSubmit={ this.handleSubmit } />
        </div>
    );
  }
}

export default IntakeAdd