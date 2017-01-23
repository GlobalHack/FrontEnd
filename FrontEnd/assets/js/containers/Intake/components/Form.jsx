import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

import PhoneNumber from 'components/PhoneNumber'
import Interests from './Interests'
import Address from 'components/Address'
import IncrementInput from 'components/IncrementInput' 

import * as Defaults from 'services/Defaults'

import * as CustomerActions from 'actions/Customer'

@connect(state => ({ }))

class EditForm extends Component {
  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    var formData = Defaults.customer( $(ev.target).serializeObject() )
    var _this = this
    if (this.props.customer.firstName) {
        $.ajax({
            url: ev.target.action,
            type: 'PUT',
            data: formData,
            success: function(response) {
                if (!response.homes) response.homes = []
                _this.props.dispatch( CustomerActions.updateCustomer(response) )
                browserHistory.push(`/customers/${response.id}/edit`)
            }
        });
    } else {
        $.post(ev.target.action, formData, function(response){
            _this.props.dispatch( CustomerActions.addCustomer(response) )
            browserHistory.push(`/customers/${response.id}/edit`)
        })
    }

  }

  render() {
    return (
        <form method="POST" onSubmit={ this.handleSubmit } action={`/customers${ this.props.routeParams.customerId ? `/${this.props.routeParams.customerId}` : '' }`}>
            <div className="customer-input-card full">
                <Link to="/" className="back-link">&lt; Back to All Customers</Link>
                <span className="subhead-lockup">
                    <h2>Customer Information</h2>
                </span>
                <div className="flex-wrapper flex-between">
                    <div className="input-with-labels">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="Walt" name="firstName" defaultValue={ this.props.customer.firstName } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Disney" name="lastName" defaultValue={ this.props.customer.lastName } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="walt@disney.com" name="email" defaultValue={ this.props.customer.email } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="lastName">Phone Number</label>
                        <PhoneNumber name="phone" defaultValue={ this.props.customer.phone } />
                    </div>
                    <Address customer={ this.props.customer } />
                    <Interests customer={ this.props.customer } />
                </div>
                <button> { this.props.customer.firstName ? 'Update' : 'Submit' }</button>
            </div>
        </form>
    );
  }
}

EditForm.defaultProps = {
    customer: {},
    routeParams: {}
}

export default EditForm