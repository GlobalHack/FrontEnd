import React, { Component } from 'react'
import { connect } from 'react-redux'

require('styles/components/BooleanInput')

class BooleanInput extends Component {
  constructor(props){
      super(props)
      this.state = {
          val: this.props.defaultValue || false
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev){
      ev.preventDefault();
      this.setState({
          val: !this.state.val
      })
  }

  componentDidMount(){
      this.props.onChange( this.state.val )
  }

  componentDidUpdate(){
      this.props.onChange( this.state.val )
  }

  render() {
    return (
        <div className="boolean-input">
            <input type="checkbox" id={ this.props.id } name={ this.props.id } checked={ this.state.val } />
            <label onClick={ this.handleClick } htmlFor={ this.props.id } className="boolean-toggles">
                <span className="boolean-true" onClick={ this.yesToggle }>Yes</span>
                <span className="boolean-false" onClick={ this.noToggle }>No</span>
            </label>
        </div>
    );
  }
}
BooleanInput.defaultProps = { incrementAmount: 1 }
export default BooleanInput