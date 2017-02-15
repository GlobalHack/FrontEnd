import React, { Component } from 'react'
import { connect } from 'react-redux'

require('styles/components/AltBooleanInput')

class BooleanInput extends Component {
  constructor(props){
      super(props)
      console.log( props )
      this.state = {}
      if (typeof props.value !== 'undefined') this.state.val = props.value

      this.setTrue = this.setTrue.bind(this);
      this.setFalse = this.setFalse.bind(this);
  }
  
  componentDidMount(){
    //   this.props.onChange( this.state.val )
  }

  componentDidUpdate(){
      this.props.onChange( this.state.val )
  }

  setTrue(ev) {
      ev.preventDefault()
      this.setState({
          val: true
      }, function(){
          this.props.onChange( this.state.val )
      })
  }

  setFalse(ev) {
      ev.preventDefault()
      this.setState({
          val: false
      }, function(){
          this.props.onChange( this.state.val )
      })
  }


  render() {
    return (
        <div className="alt-boolean-input">
            <input type="checkbox" id={ this.props.id } name={ this.props.id } checked={ this.state.val } />
            <div className="alt-boolean-toggles">
                <span className={`boolean boolean-true ${ this.state.val === true ? 'active' : '' }`} onClick={ this.setTrue }>Yes</span>
                <span className={`boolean boolean-false ${ this.state.val === false ? 'active' : '' }`} onClick={ this.setFalse }>No</span>
            </div>
        </div>
    );
  }
}
BooleanInput.defaultProps = { incrementAmount: 1 }
export default BooleanInput