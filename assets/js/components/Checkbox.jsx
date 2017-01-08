import React, { Component } from 'react'
import { connect } from 'react-redux'

class Checkbox extends Component {
  constructor(props){
      super(props)
  }

  isDefaultChecked(){
      if (!this.props.defaultCheckedArray) return false
      return this.props.defaultCheckedArray.indexOf( this.props.value ) > -1
  }

  render() {
    var checkboxId = `checkbox-${this.props.name.replace(/\[\]/,'')}-${this.props.value}` 
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" id={ checkboxId } name={ this.props.name } defaultChecked={ this.isDefaultChecked() } value={ this.props.value } />
            <label htmlFor={ checkboxId }>{ this.props.label }</label>
        </div>
    );
  }
}

Checkbox.defaultProps = {
    defaultCheckedArray: []    
}

export default Checkbox