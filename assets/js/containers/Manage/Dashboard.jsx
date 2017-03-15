import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory, Link} from 'react-router';

/* COMPONENTS --- */
import EmployeeRow from '../Employees/components/EmployeeRow'

@connect(state => ({}))

class EmployeesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get employees.</p> )
    var employeesRows = this.state.employees.map((employee, i) => {
      return <EmployeeRow key={`user-row-${i}`} { ...employee } />
    })
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1>Change your password</h1>
          <Link to="/password">
            <button type="button" className="btn btn-primary">Change Password</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default EmployeesView
