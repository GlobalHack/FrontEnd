import React, { Component } from 'react'
import { connect } from 'react-redux'

import IntakeForm from './components/Form'

class IntakeAdd extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // https://github.com/mozilla-services/react-jsonschema-form#multiple-choices-list
        return (
                <section className="content intake-add">
                    <IntakeForm />
                </section>
        );
    }
}

export default IntakeAdd