import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import ChangePassword from './ChangePassword'

@connect(state => ({}))

class Settings extends Component {
  constructor(props){
      super(props)
  }

  render() {
    let children = null
    let { auth } = this.props
    return (
        <div className="page settings">
            <Logout auth={ auth }/>
        </div>
    )
  }
}

require('styles/containers/Settings')

export default Settings
