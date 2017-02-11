import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Format from 'services/Format'

class AltDate extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        if (props.value) {
            var date = new Date(props.value)
            this.state.month = date.getMonth()
            this.state.day = date.getDate()
            this.state.year = date.getFullYear()
        }
        this.updateMonth = this.updateMonth.bind(this);
        this.updateDay = this.updateDay.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.sendChange = this.sendChange.bind(this);
    }

    handleKeyUp(ev) {
        if (ev.target.value !== Format.phone(ev.target.value)) {
            document.getElementById(this.props.id).value = Format.phone(ev.target.value)
        }
    }

    updateMonth(ev) {
        this.setState({ month: isNaN(Number(ev.target.value)) ? null : Number(ev.target.value) }, function(){
            this.sendChange()
        })
    }
    updateDay(ev) {
        this.setState({ day: isNaN(Number(ev.target.value)) ? null : Number(ev.target.value) }, function(){
            this.sendChange()
        })
    }
    updateYear(ev) {
        this.setState({ year: isNaN(Number(ev.target.value)) ? null : Number(ev.target.value) }, function(){
            this.sendChange()
        })
    }
    sendChange() {
        if (this.state.month && this.state.day && this.state.year) {
            this.props.onChange( new Date(this.state.year, this.state.month, this.state.day).toISOString() )
        } else {
            this.props.onChange(null)
        }
    }
    getMonthOptions() {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(function (month, i) {
            return <option key={`month-${i}`} value={i}>{month}</option>
        })
    }
    getDayOptions() {
        var dayOptions = [];
        for (var i = 1; i <= 31; i++) {
            dayOptions.push(
                <option key={`day-${i}`} value={i}>{i}</option>
            )
        }
        return dayOptions
    }

    getYearOptions() {
        var d = new Date();
        var maxYear = d.getFullYear();
        var minYear = maxYear - 79;
        var yearOptions = [];
        for (var i = minYear; i <= maxYear; i++) {
            yearOptions.push(
                <option key={`year-${i}`} value={i}>{i}</option>
            )
        }
        return yearOptions
    }

    render() {
        return (
            <div className="alt-date">
                <select className="form-control month" onChange={this.updateMonth} defaultValue={ this.state.month } >
                    <option>Month</option>
                    {this.getMonthOptions()}
                </select>
                <select className="form-control day" onChange={this.updateDay} defaultValue={ this.state.day } >
                    <option>Day</option>
                    {this.getDayOptions()}
                </select>
                <select className="form-control year" onChange={this.updateYear} defaultValue={ this.state.year } >
                    <option>Year</option>
                    {this.getYearOptions()}
                </select>
            </div>
        );
    }
}

require('styles/components/AltDate')

export default AltDate