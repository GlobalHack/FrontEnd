import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Format from 'services/Format'

class PhoneNumber extends Component {
  constructor(props){
      super(props)
      this.handleKeyUp = this.handleKeyUp.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  handleKeyUp(ev){
      if (ev.target.value !== Format.phone(ev.target.value)) {
          document.getElementById( this.props.id ).value = Format.phone(ev.target.value)
      }
  }

  handleChange(ev) {
      this.props.onChange(ev.target.value)
  }

  render() {
    return (
        <input 
            type="tel"
            className="form-control"
            placeholder={ this.props.placeholder || '' }
            maxLength="14"
            onKeyUp={ this.handleKeyUp }
            onChange={ this.handleChange }
            id={ this.props.id }
            defaultValue={ Format.phone(this.props.value) } />
    );
  }
}

PhoneNumber.defaultProps = {
    defaultCheckedArray: []    
}

export default PhoneNumber