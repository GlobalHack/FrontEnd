import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Format from 'services/Format'

class AltDate extends Component {
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

  getMonthOptions(){
      return [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ].map(function(month, i){
          return <option key={`month-${i}`} value={ i }>{ month }</option>
      })
  }
  getDayOptions(){
      var dayOptions = [];
      for (var i=1; i<=31; i++) {
          dayOptions.push(
              <option key={`day-${i}`} value={ i }>{ i }</option>
          )
      }
      return dayOptions
  }

  render() {
      {/*<input 
            type="tel"
            className="form-control"
            placeholder={ this.props.placeholder || '' }
            maxLength="14"
            onKeyUp={ this.handleKeyUp }
            onChange={ this.handleChange }
            id={ this.props.id }
            defaultValue={ Format.phone(this.props.value) } />*/}
    return (
        <div className="alt-date">
            <select className="form-control">
                <option>Month</option>
                { this.getMonthOptions() }
            </select>
            <select className="form-control">
                <option>Day</option>
                { this.getDayOptions() }
            </select>
            <select className="form-control">
                <option>Year</option>
            </select>
        </div>
    );
  }
}

require('styles/components/AltDate')

export default AltDate