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
let uiSchema = FormUI.Schema(CustomerSchema)
uiSchema["ui:order"] = [
    "firstName",
    "lastName",
    "ssn",
    "dateOfBirth",
    "*"
]

const widgets = FormUI.Widgets;
const formData = { };

const schema = {
    type: "object",
    properties: CustomerSchema
}

class CustomerAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: props.data || {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount(){
        if (this.state.formData.id) {
            this.props.handleState({
                hasCustomerId: true
            })
        }
    }

    handleError() {
        console.log("there is an error!");
        console.log(arguments);
    }

    handleSubmit(formState) {
        var _this = this;
        if (this.state.formData.id) {
            var formData = Format.cleanForPut( formState.formData )
            $.ajax({
                    url: `/customers/${this.state.formData.id}`,
                    data: formData,
                    method: 'PUT'
                }).done(function( response ) {
                    _this.props.handleState({
                        hasCustomerId: true,
                        customer:response
                    })
                    _this.setState({
                        formData: response
                    })
                })
                .fail(function( response) {
                    alert('update failed - see console for details')
                    console.log('PUT ERROR:', response)
                })
        } else {
            var formData = Format.cleanFormData( formState.formData )
            $.post('/customers', formData)
                .done(function( response ) {
                    _this.props.handleState({
                        hasCustomerId: true,
                        customerId: response.id,
                        customer: response
                    })
                    _this.setState({
                        formData: response
                    })
                })
                .fail(function( response) {
                    alert('submit failed - see console for details')
                    console.log('POST ERROR:', response)
                })
        }
    }

    handleChange(formState) {
        // nothing for now
    }

    render() {
        return (
                <section className="content customer-add">
                    <Form formData={ Format.cleanFormData(this.state.formData) } FieldTemplate={FieldTemplate} schema={schema} uiSchema={uiSchema} widgets={widgets} onError={this.handleError} onSubmit={this.handleSubmit} onChange={ this.handleChange }>
                        <div>
                            <button className="btn btn-info" type="submit">{ this.state.formData.id ? 'Update' : 'Submit' }</button>
                        </div>
                    </Form>
                </section>
        );
    }
}

require('./CustomerAdd.scss')

CustomerAdd.defaultProps = {
    data: {}
}

export default CustomerAdd;