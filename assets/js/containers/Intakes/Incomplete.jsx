import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import IntakeRow from './components/IntakeRow'

@connect(state => ({}))

class IntakesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intakes: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/api/intakes?complete=false')
      .done(function (response) {
        _this.setState({
          intakes: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get intakes.</p> )
    var intakesRows = this.state.intakes.map((intake, i) => {
      return <IntakeRow key={`intake-row-${i}`} { ...intake } />
    })
    return (
      <div>
        <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
          <thead className="thead-default">
            <tr>
              <th>Customer First Name</th>
              <th>Customer Last Name</th>
              <th>Created</th>
              <th>Score</th>
              <th>Complete</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { intakesRows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default IntakesView
