import React, { Component } from 'react'
import AuthOLockPasswordless from 'auth0-lock-passwordless'


class ForgotPassword extends Component {
  constructor(props){
      super(props)
  }

  triggerMagicLink(e){
    console.log('The Link was Clicked')
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
