import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

import PhoneNumber from 'components/PhoneNumber'
import IncrementInput from 'components/IncrementInput'

import AuthService from 'utils/AuthService'

//@connect(state => ({}));
class CreateUserForm extends Component {

  static propTypes = {
    profile: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    var formData = $(ev.target).serializeObject()

    let { auth } = this.props
    auth.setProfile(formData)
  }

  render() {
    let profile = this.props.auth.getProfile()
    return (

        <form method="POST" onSubmit={this.handleSubmit} action={`/api/users${profile.user_id ? `/${profile.user_id}` : ''}`}>
            <div className="user-input-card full">
                <div>
                    <div className="input-with-labels">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="Walt" className="form-control" name="firstName" defaultValue={profile.firstName} />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Disney" name="lastName" className="form-control" defaultValue={profile.lastName} />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="walt@disney.com" name="email" className="form-control" defaultValue={profile.email} />
                    </div>
                    <div className="input-with-labels">
                        <label htmlFor="permissions">Permissions</label>
                        <select defaultValue={profile.permissions} className="form-control" name="permissions">
                            <option value="all">Share All Data</option>
                            <option value="allButDV">Share All Data Except DV</option>
                            <option value="allButDVAndYouth">Share All Data Except DV and Youth Data</option>
                            <option value="allButMedical">Share All Data Except Medical Data</option>
                            <option value="electronic">Electronic Referrals Only</option>
                            <option value="none" selected>Do Not Share</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value={profile.firstName ? 'Update' : 'Submit'}></input>
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
