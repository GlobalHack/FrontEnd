import React, { Component } from 'react'
import { connect } from 'react-redux'

require('styles/components/IncrementInput')

class IncrementInput extends Component {
  constructor(props){
      super(props)
      this.state = {
          count: this.props.defaultValue ? Number(this.props.defaultValue) : 0
      }   
      this.handleDecrement = this.handleDecrement.bind(this)
      this.handleIncrement = this.handleIncrement.bind(this)
  }

  componentDidMount(){
      this.props.onChange( this.state.count )
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
            <span className="count">{ this.state.count }</span>
            <a className="incrementor plus" href="#" onTouchStart={ this.handleIncrement } onClick={ this.handleIncrement }>&#43;</a>
        </span>
    );
  }
}
IncrementInput.defaultProps = { incrementAmount: 1 }
export default IncrementInput