import React, { Component } from 'react'
import { connect } from 'react-redux'

/* COMPONENTS --- */
import Header from 'components/Header'
import Menu from 'components/Menu'

@connect(state => ({}))

class Template extends Component {
  constructor(props){
      super(props)
  }

  render() {
    let children = null;
    let {auth} = this.props.route

    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    return (
        <section className="primary-wrapper template">
            <Header auth={auth}/>
            <Menu />
            <div className="primary-content">
                { children }
            </div>
        </section>
    );
  }
}

export default Template
