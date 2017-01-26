import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Settings from 'settings'


import Form from "react-jsonschema-form";

/* COMPONENTS --- */
import PhoneNumber from 'components/PhoneNumber'
function validate(formData, errors) {
  if (formData.NewPassword1 !== formData.NewPassword2) {
    errors.NewPassword2.addError("Passwords don't match");
  }
  return errors;
}
const schema = {
  title: "Change your password",
  type: "object",
  required: ["OldPassword", "NewPassword1", "NewPassword2", "SecureQuestion", "SecureAnswer"],
  properties: {
   OldPassword: {
        type: "string",
        title: "Old Password",

    },
    NewPassword1: {
        type: "string",
        title: "New Password",
        default: "",
        minLength: 3,
        maxLength: 100,
    },
    NewPassword2: {
      "title": "Re-Type New Password",
      "type": "string",
      "minLength": 3,
      "maxLength": 100
    },
    SecureQuestion: {
    "title": "Security Question:",
    "type": "string",
      "enum": [
        "SQ1",
        "SQ2"
      ],
    "enumNames": [
        "What is your mother's Name?",
        "What was your first car?"
      ]
    },
    SecureAnswer: {
      title: "Security Answer",
      type: "string"

    },

  }
}

const widgets = {
  phoneNumber: PhoneNumber
}

const uiSchema = {
    "OldPassword": {
        "ui:widget": "password"
    },
   "NewPassword1": {
        "ui:widget": "password"
    },
    "NewPassword2": {
        "ui:widget": "password"
    },
    "SecureQuestion": {


    },
    "secureAnswer":{
         "ui:widget": "textarea"
    },
}

const formData = {
  title: "First task",
}


class ChangePassword extends Component {
  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.validate = this.validate
  }



  handleSubmit(formData){


      console.log(formData.formData)
  }

  render() {
    return (
        <div>
            <Form
                schema={ schema }
                validate={ validate }
                uiSchema={ uiSchema }
                widgets={ widgets }
                onSubmit={ this.handleSubmit } />
        </div>
    );
  }
}

export default ChangePassword
