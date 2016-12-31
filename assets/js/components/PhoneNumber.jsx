import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Format from 'services/Format'

class PhoneNumber extends Component {
  constructor(props){
      super(props)
      this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(ev){
      if (ev.target.value !== Format.phone(ev.target.value)) {
          document.getElementsByName( this.props.name )[0].value = Format.phone(ev.target.value)
      }
  }

  render() {
    return (
        <input type="tel" placeholder="(555) 123-1234" maxLength="14" onKeyUp={ this.handleKeyUp } name={ this.props.name } defaultValue={ Format.phone(this.props.defaultValue) } />
    );
  }
}

PhoneNumber.defaultProps = {
    defaultCheckedArray: []    
}

export default PhoneNumber