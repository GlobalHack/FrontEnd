import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import EmployeeRow from './components/EmployeeRow'

@connect(state => ({}))

class EmployeesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/employees')
      .done(function (response) {
        _this.setState({
          employees: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get employees.</p> )
    var employeesRows = this.state.employees.map((employee, i) => {
      return <EmployeeRow key={`employee-row-${i}`} { ...employee } />
    })
    return (
      <div>
        <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
          <thead className="thead-default">
            <tr>
              <th>Organization</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>SSN</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            { employeesRows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default EmployeesView
