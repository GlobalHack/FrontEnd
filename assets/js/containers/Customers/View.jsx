import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import CustomerRow from './components/CustomerRow'

@connect(state => ({}))

class CustomersView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/api/customers')
      .done(function (response) {
        _this.setState({
          customers: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get customers.</p> )
    var customersRows = this.state.customers.map((customer, i) => {
      return <CustomerRow key={`customer-row-${i}`} { ...customer } />
    })
    return (
      <div>
        <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
          <thead className="thead-default">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>SSN</th>
              <th>Domestic Violence</th>
              <th>Youth</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            { customersRows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CustomersView
