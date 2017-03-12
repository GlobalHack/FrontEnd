import React, {Component} from 'react'
import {connect} from 'react-redux'

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

    componentWillMount() {
        var _this = this;
        $.get('/api/employees')
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
            return <EmployeeRow key={`user-row-${i}`} { ...employee } />
        })
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h1>Change your email</h1>
                    <form>
                        <input type="email" className="form-control" placeholder="new email"></input><br />
                        <input type="email" className="form-control" placeholder="confirm new email"></input><br />
                        <button type="button" className="btn btn-primary">Change Email</button>
                    </form>
                    <h1>Change your password</h1>
                    <form>
                        <input type="password" className="form-control" placeholder="new password"></input><br />
                        <input type="password" className="form-control" placeholder="confirm new password"></input><br />
                        <button type="button" className="btn btn-primary">Change Password</button>
                    </form>
                </div>
                <div className="col-sm-6">
                    <h1>Edit Users</h1>
                    <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
                        <thead className="thead-default">
                        <tr>
                            <th>Organization</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Disabled</th>
                        </tr>
                        </thead>
                        <tbody>
                        { employeesRows }
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary pull-right">Save Changes</button>
                </div>
                <div className="col-sm-12">
                    <h1>Change Permissions for Other Orgs to Access your info</h1>
                    <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
                        <thead className="thead-default">
                        <tr>
                            <th>Organization</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Disabled</th>
                        </tr>
                        </thead>
                        <tbody>
                        { employeesRows }
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary pull-right">Save Changes</button>
                </div>
            </div>
        )
    }
}

export default EmployeesView
