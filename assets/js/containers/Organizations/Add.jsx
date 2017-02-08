import React, {Component} from 'react'
import {connect} from 'react-redux'

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import Form from "react-jsonschema-form"
import FieldTemplate from 'components/FieldTemplate'

let OrganizationSchema = require('schemas/Organization')

/* FORMAT TO ACCOMODATE DIFFERENCES BETWEEN SERVER SIDE AND CLIENT SIDE SCHEMA --- */
OrganizationSchema = Format.schema(OrganizationSchema)

/* GENERATE UI SCHEMA --- */
const uiSchema = FormUI.Schema(OrganizationSchema)

const widgets = FormUI.Widgets;
const formData = {title: "First task", done: true}

const schema = {
  type: "object",
  properties: OrganizationSchema
}

class OrganizationAdd extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleError() {
    console.log("there is an error!")
    console.log(arguments)
  }

  handleSubmit(formData) {
    alert('form data logged in console')
    console.log(formData.formData)
    $.post('/organizations', formData.formData)
      .done(function (response) {
        console.log(response);
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    return (
      <section className="content">
        <Form
          FieldTemplate={FieldTemplate}
          schema={schema}
          uiSchema={uiSchema}
          widgets={widgets}
          onError={this.handleError}
          onSubmit={this.handleSubmit}/>
      </section>
    );
  }
}

export default OrganizationAdd
