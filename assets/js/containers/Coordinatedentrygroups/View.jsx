import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import CoordinatedEntryGroupRow from './components/CoordinatedEntryGroupRow'

@connect(state => ({}))

class CoordinatedEntryGroupsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coordinatedentrygroups: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/api/coordinatedentrygroups')
      .done(function (response) {
        _this.setState({
          coordinatedentrygroups: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get organizations.</p> )
    var coordinatedEntryGroupsRows = this.state.coordinatedentrygroups.map((coordinatedentrygroup, i) => {
      return <CoordinatedEntryGroupRow key={`coordinatedentrygroup-row-${i}`} { ...coordinatedentrygroup } />
    })
    return (
      <div>
        <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
          <thead className="thead-default">
            <tr>
              <th>Lead Organization</th>
              <th>Group Name</th>
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody>
            { coordinatedEntryGroupsRows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CoordinatedEntryGroupsView
