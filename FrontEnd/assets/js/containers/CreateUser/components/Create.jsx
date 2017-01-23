import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

import PhoneNumber from 'components/PhoneNumber'
import IncrementInput from 'components/IncrementInput' 

import * as Defaults from 'services/Defaults'

import * as UserActions from 'actions/User'


//@connect(state => ({}));
class CreateUserForm extends Component {
    
  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    var formData = Defaults.user( $(ev.target).serializeObject() )
    var _this = this
    if (this.props.user.firstName) {
        $.ajax({
            url: ev.target.action,
            type: 'PUT',
            data: formData,
            success: function(response) {
                _this.props.dispatch( UserActions.updateUser(response) )
                browserHistory.push(`/users/${response.id}/edit`)
            }
        });
    } else {
        $.post(ev.target.action, formData, function(response){
            _this.props.dispatch( UserActions.addUser(response) )
            browserHistory.push(`/users/${response.id}/edit`)
        })
    }

  }

  render() {
    return (
        <form method="POST" onSubmit={ this.handleSubmit } action={`/users${ this.props.routeParams.userId ? `/${this.props.routeParams.userId}` : '' }`}>
            <div className="user-input-card full">
                <Link to="/" className="back-link">&lt; Back to All Users</Link>
                <span className="subhead-lockup">
                    <h2>User Information</h2>
                </span>
                <div>
                    <div className="input-with-labels">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="Walt" className="form-control" name="firstName" defaultValue={ this.props.user.firstName } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Disney" name="lastName" className="form-control" defaultValue={ this.props.user.lastName } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="walt@disney.com" name="email" className="form-control" defaultValue={ this.props.user.email } />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="permissions">Permissions</label>
                        <select defaultValue={this.props.user.permissions} className="form-control" name="permissions">
                            <option value="all">Share All Data</option>
                            <option value="allButDV">Share All Data Except DV</option>
                            <option value="allButDVAndYouth">Share All Data Except DV and Youth Data</option>
                            <option value="allButMedical">Share All Data Except Medical Data</option>
                            <option value="electronic">Electronic Referrals Only</option>
                            <option value="none" selected>Do Not Share</option>
                        </select>
                    </div>
                </div>
                <input type="submit"> { this.props.user.firstName ? 'Update' : 'Submit' }</input>
            </div>
        </form>
    );
  }
}

CreateUserForm.defaultProps = {
    user: {},
    routeParams: {}
}

export default CreateUserForm