import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({}))

class Settings extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div className="page settings">
            { this.props.children }
        </div>
    )
  }
}

require('styles/containers/Settings')

export default Settings