import React, { Component } from 'react';
import { connect } from 'react-redux'

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import Form from "react-jsonschema-form"
import FieldTemplate from 'components/FieldTemplate'

let CustomerSchema = require('schemas/Customer')

/* FORMAT TO ACCOMODATE DIFFERENCES BETWEEN SERVER SIDE AND CLIENT SIDE SCHEMA --- */
CustomerSchema = Format.schema(CustomerSchema)

/* GENERATE UI SCHEMA --- */
const uiSchema = FormUI.Schema(CustomerSchema)

const widgets = FormUI.Widgets;
const formData = { };

const schema = {
    type: "object",
    properties: CustomerSchema
}

class CustomerAdd extends Component {
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
                <section className="content customer-add">
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

require('./CustomerAdd.scss')

export default CustomerAdd;