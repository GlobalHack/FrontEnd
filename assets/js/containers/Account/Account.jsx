import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AuthService from 'utils/AuthService'
import CreateUserForm from '../CreateUser/components/Create'

@connect(state => ({}))
class Account extends Component {

  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }

  constructor(props){
      super(props)
  }

  render() {
    let { auth } = this.props

    return (
      <div>
        <h2>Home</h2>
        <CreateUserForm auth={auth}></CreateUserForm>
      </div>
    );
  }

}

export default Account
