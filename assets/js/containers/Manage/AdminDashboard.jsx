import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory, Link} from 'react-router';

/* SERVICES --- */
import * as FormUI from 'services/FormUI'
import * as Format from 'services/Format'

/* COMPONENTS --- */
import EmployeeRow from './components/ManageEmployeeRow'
import OrganizationRow from './components/ManageOrganizationRow'

@connect(state => ({}))

class ManageUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      employees: [],
      roles: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/api/employees?organization=1')
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

    $.get('/api/roles')
      .done(function (response) {
        _this.setState({
          roles: response
        })

      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render(){
    if (this.state.hasError) return ( <p>Unable to get data.</p>);
    var _this = this;
    var employeesRows = _this.state.employees.map((employee, i) => {
      return <EmployeeRow key={`user-row-${i}`} roles={ _this.state.roles } { ...employee } />
    });
    return(
    <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
      <thead className="thead-default">
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Disabled</th>
      </tr>
      </thead>
      <tbody>
      { employeesRows }
      </tbody>
    </table>
    )
  }
}

class ManageOrganization extends Component {
  constructor(props){
    super(props)
    this.state = {
      organizations: [],
      hasError: false
    }
  }

  componentWillMount(){
    var _this = this;
    $.get('/api/organizations')
      .done(function (response) {
        _this.setState({
          organizations: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get data.</p> );
    var organizationsRows = this.state.organizations.map((organization, i) => {
      return <OrganizationRow key={`organization-row-${i}`} { ...organization } />
    })
    return(
      <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
        <thead className="thead-default">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Permission</th>
          <th>Expiration</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        { organizationsRows }
        </tbody>
      </table>
    )
  }
}

class EmployeesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      organizations: [],
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get data.</p> )
    var employeesRows = this.state.employees.map((employee, i) => {
      return <EmployeeRow key={`user-row-${i}`} { ...employee } />
    });
    var organizationsRows = this.state.organizations.map((organization, i) => {
      return <OrganizationRow key={`organization-row-${i}`} { ...organization } />
    })
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1>Change your password</h1>
          <Link to="/password">
            <button type="button" className="btn btn-primary">Change Password</button>
          </Link>
        </div>
        <div className="col-sm-6">
          <h1>Edit Users</h1>
          <ManageUser/>
        </div>
        <div className="col-sm-12">
          <h1>Change Permissions for Other Orgs to Access your info</h1>
          <ManageOrganization/>
        </div>
      </div>
    )
  }
}

export default EmployeesView
