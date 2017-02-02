import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "react-jsonschema-form";

import * as Format from 'services/Format';
let IntakeSchema = require('schemas/Intake');
IntakeSchema = Format.schema( IntakeSchema );

/* COMPONENTS --- */
import PhoneNumber from 'components/PhoneNumber'
import IncrementInput from 'components/IncrementInput'

const schema = {
  title: "Intake Form from Schema",
  type: "object",
  properties: IntakeSchema
}

const widgets = {
  phoneNumber: PhoneNumber,
  increment: IncrementInput
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
    },
    "Housing_1": {
        "ui:widget": "increment"
    },
    "Housing_2": {
        "ui:widget": "increment"
    },
    "Risks_1": {
        "ui:widget": "increment"
    },
    "Risks_2": {
        "ui:widget": "increment"
    },
    "Risks_3": {
        "ui:widget": "increment"
    },
    "Risks_4": {
        "ui:widget": "increment"
    },
    "Risks_5": {
        "ui:widget": "increment"
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
        <div className="content-wrapper">
            <section className="content-header">
            <h1>
                Intakes
            </h1>
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Intakes</a></li>
            </ol>
            </section>

            <section className="content">
                <Form
                    schema={ schema }
                    uiSchema={ uiSchema }
                    widgets={ widgets }
                    onError={ this.handleError }
                    onSubmit={ this.handleSubmit } />
            </section>
        </div>
    );
  }
}

export default IntakeAdd