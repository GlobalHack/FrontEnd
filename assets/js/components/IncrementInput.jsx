import React, { Component } from 'react'
import { connect } from 'react-redux'

require('styles/components/IncrementInput')

class IncrementInput extends Component {
  constructor(props){
      super(props)
      this.state = {
          count: this.props.value || 0
      }   
      this.handleChange = this.handleChange.bind(this);
      this.handleDecrement = this.handleDecrement.bind(this)
      this.handleIncrement = this.handleIncrement.bind(this)
  }

  componentDidMount(){
      this.props.onChange( this.state.val )
  }

  handleChange(ev) {
      ev.preventDefault();
      this.setState({
          count: Number(ev.target.value)
      }, function(){
          this.props.onChange( this.state.count )
      })
  }

  handleDecrement(ev) {
      ev.preventDefault()
      this.setState({
          count: this.state.count - this.props.incrementAmount >= 0 ? this.state.count - this.props.incrementAmount : 0 
      }, function(){
          this.props.onChange( this.state.count )
      })
  }

  handleIncrement(ev) {
      ev.preventDefault()
      this.setState({
          count: this.state.count + this.props.incrementAmount
      }, function(){
          this.props.onChange( this.state.count )
      })
  }


  render() {
    return (
        <span className="increment-input">
            <input type="hidden" id={ this.props.id } value={ this.state.count } name={ this.props.name } />
            <a className="incrementor minus" href="#" onTouchStart={ this.handleDecrement } onClick={ this.handleDecrement }>&minus;</a>
            <input type="tel" maxLength="2" value={ this.state.count } onChange={ this.handleChange } />
            <a className="incrementor plus" href="#" onTouchStart={ this.handleIncrement } onClick={ this.handleIncrement }>&#43;</a>
        </span>
    );
  }
}
IncrementInput.defaultProps = { incrementAmount: 1 }
export default IncrementInput