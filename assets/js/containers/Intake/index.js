import React, { Component } from 'react'
import { connect } from 'react-redux'

/* ACTIONS --- */
import * as ExampleActions from 'actions/Example'

/* COMPONENTS --- */
import Menu from 'components/Menu'

@connect(state => ({}))

class Intake extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <section className="primary-content">
            <Menu />
            { this.props.children }
        </section>
    );
  }
}

require('./styles.scss')

export default Intake