import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({}))

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content">
                    { this.props.children }
                </section>
            </div>
        )
    }
}

export default Users