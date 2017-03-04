import React, {Component} from 'react'
import {connect} from 'react-redux'

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import Form from "react-jsonschema-form"
import FieldTemplate from 'components/FieldTemplate'

let UserSchema = require('schemas/User')

/* FORMAT TO ACCOMODATE DIFFERENCES BETWEEN SERVER SIDE AND CLIENT SIDE SCHEMA --- */
delete UserSchema.organization;
delete UserSchema.role;
UserSchema = Format.schema(UserSchema)

/* GENERATE UI SCHEMA --- */
const uiSchema = FormUI.Schema(UserSchema)

const widgets = FormUI.Widgets;
const formData = {title: "First task", done: true}

const schema = {
  type: "object",
  properties: UserSchema
}

class UserAdd extends Component {
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
    $.post('/api/users', formData.formData)
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
        <p>We will invite these users by their email from cemaritan</p>
      </section>
    );
  }
}

export default UserAdd
