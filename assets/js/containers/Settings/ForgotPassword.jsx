import React, { Component } from 'react'
import AuthOLockPasswordless from 'auth0-lock-passwordless'
import * as Settings from 'settings'


class ForgotPassword extends Component {
  constructor(props){
      super(props)

  }

  triggerMagicLink(e){
    let lock = new AuthOLockPasswordless(Settings.Auth0ClientID, Settings.Auth0Domain)
    lock.magiclink((error, email) => {
      if(!error){
        alert("A magic link has been sent to " + email);
      }
    })
  }

  render() {
    return (
      <a href="#" onClick={ this.triggerMagicLink }>
        Forgot your Password?
      </a>
    );
  }

}
export default ForgotPassword
