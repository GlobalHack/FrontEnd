import React, { Component } from 'react'
import { connect } from 'react-redux'

import IntakeForm from './components/Form'
let IntakeSchema = require('schemas/Intake')

/* SERVICES --- */
import * as Format from 'services/Format'

class IntakeAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            hasData: false,
            data: {}
        }
    }

    componentDidMount() {
        var _this = this
        $.get(`/intakes/${ this.props.routeParams.id }`)
            .done(function(response){
                _this.setState({
                    hasData:true,
                    data: response,
                    hasError: false
                })
            })
            .fail(function(response){
                _this.setState({
                    hasError: true,
                    hasData: false
                })
            })
    }
    

    render() {
        // https://github.com/mozilla-services/react-jsonschema-form#multiple-choices-list
        return (
                <section className="content intake-add">
                    { this.state.hasData ? <IntakeForm id={ this.props.routeParams.id } data={ this.state.data } /> : null }
                </section>
        );
    }
}

export default IntakeAdd