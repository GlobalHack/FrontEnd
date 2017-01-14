import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({}))

class Login extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div>
            I am the login
        </div>
    );
  }
}

export default Login