import React, { Component } from 'react'
import AuthOLockPasswordless from 'auth0-lock-passwordless'
import ChangePassword from 'containers/Settings/ChangePassword'
import ForgotPassword from 'containers/Settings/ForgotPassword'

class Settings extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (<div>
      <ChangePassword />
      <ForgotPassword />
    </div>);
  }

}
export default Settings
