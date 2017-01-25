import React, { Component } from 'react'


class Settings extends Component {
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
export default Settings
