import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import Form from "react-jsonschema-form"
import FieldTemplate from 'components/FieldTemplate'
import CustomerAdd from './CustomerAdd'

let IntakeSchema = require('schemas/Intake')

/* FORMAT TO ACCOMODATE DIFFERENCES BETWEEN SERVER SIDE AND CLIENT SIDE SCHEMA --- */
IntakeSchema = Format.schema(IntakeSchema)
IntakeSchema = Format.removeRequire(IntakeSchema)

/* GROUP FORM ELEMENTS ------------------------------------------------------------ */
/* NOTE: WHEN YOU GROUP FORM ELEMENTS, YOU MUST FLATTEN THEM BEFORE SUBMITTING DATA */
IntakeSchema = FormUI.GroupSchema(IntakeSchema, new Set(['customer', 'complete', 'employee']))

/* GENERATE UI SCHEMA --- */
let uiSchema = FormUI.Schema(IntakeSchema)

/* HIDE REFERENCE INPUTS */
uiSchema.customer = { "ui:widget" : "hidden" }
uiSchema.employee = { "ui:widget" : "hidden" }

const widgets = FormUI.Widgets;
const schema = {
    type: "object",
    properties: IntakeSchema
}

class IntakeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCustomerId: props.data.id || false,
            data: props.data || {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleState = this.handleState.bind(this);
    }

    removeChildData(formData) {
        delete formData.customer
        delete formData.employee
        return formData
    }

    handleState(state){
        if (state.data) {
            state.data = {
                ...this.state.data,
                ...state.data
            }
        }
        this.setState( state )
    }

    handleError() {
        console.warn("We have an error in the Form!")
        console.log(arguments)
    }

    handleSubmit(formState) {
        var formData = Format.flatten( formState.formData )
        formData = Format.cleanFormData( formData )
        if (this.props.id) {
            $.ajax({
                    url: `/intakes/${this.props.id}`,
                    data: formData,
                    method: 'PUT'
                }).done(function( response ) {
                    browserHistory.push('/intakes/view');
                })
                .fail(function( response) {
                    alert('update failed - see console for details')
                    console.log('PUT ERROR:', response)
                })
        } else {
            $.post('/intakes', formData)
                .done(function( response ) {
                    browserHistory.push('/intakes/view');
                })
                .fail(function( response) {
                    alert('submit failed - see console for details')
                    console.log('POST ERROR:', response)
                })
        }
    }

    render() {
        // we have some string fields that should be replaced with this multiple-choice-list
        // https://github.com/mozilla-services/react-jsonschema-form#multiple-choices-list
        var customerData = this.state.data.customer
        var intakeData = FormUI.GroupData(this.removeChildData(this.state.data), new Set(['customer', 'complete', 'employee']))
        return (
                <section className="content intake-add">
                    <CustomerAdd handleState={ this.handleState } data={ customerData } />
                    {
                        this.state.hasCustomerId ?
                            <Form
                                FieldTemplate={FieldTemplate}
                                schema={schema}
                                uiSchema={uiSchema}
                                widgets={widgets}
                                formData={ intakeData }
                                onError={this.handleError}
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit} />
                            : null
                    }                    
                    
                </section>
        );
    }
}

IntakeForm.defaultProps = {
    data: {
        customer:{},
        employee:{}
    }
}

export default IntakeForm