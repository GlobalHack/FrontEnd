import React, { Component } from 'react'
import { connect } from 'react-redux'

/* COMPONENTS --- */
import Header from 'components/Header'
import Menu from 'components/Menu'

@connect(state => ({}))

class Shelter extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <section className="primary-wrapper shelter">
            <Header />
            <Menu />
            <div className="primary-content">
                { this.props.children }
            </div>
        </section>
    );
  }
}

export default Shelter