import React, { Component } from 'react'
import { connect } from 'react-redux'

class SlideInput extends Component {
  constructor(props){
      super(props)
      this.state = {
          currentValue: props.defaultValue || 0
      }

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev){
      this.setState({
          currentValue: ev.target.value
      })
  }

  render() {

    return (
        <div className="slider-input">
            { this.props.label ? (<label>{ this.props.label }{ this.props.hideColon ? '' : ':' } <span className="slider-current">{ this.state.currentValue }</span></label>) : null }
            <input type="range" defaultValue={ this.props.defaultValue } onChange={ this.handleChange } name={ this.props.name } min={ this.props.min } max={ this.props.max } step={ this.props.step } />
        </div>
    );
  }
}

SlideInput.defaultProps = {
    value: 0,
    min:0,
    max: 100,
    step: 5
}
export default SlideInput