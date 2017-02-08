import React, { Component } from 'react'
import { connect } from 'react-redux'

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import Form from "react-jsonschema-form"
import FieldTemplate from 'components/FieldTemplate'

let IntakeSchema = require('schemas/Intake')

/* FORMAT TO ACCOMODATE DIFFERENCES BETWEEN SERVER SIDE AND CLIENT SIDE SCHEMA --- */
IntakeSchema = Format.schema(IntakeSchema)

/* GROUP FORM ELEMENTS --- */
IntakeSchema = FormUI.GroupSchema(IntakeSchema)

/* GENERATE UI SCHEMA --- */
const uiSchema = FormUI.Schema(IntakeSchema)

const widgets = FormUI.Widgets;
const formData = { title: "First task", done: true }

const schema = {
    type: "object",
    properties: IntakeSchema
}

class IntakeAdd extends Component {
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
                        onSubmit={this.handleSubmit} />
                </section>
        );
    }
}

export default IntakeAdd
