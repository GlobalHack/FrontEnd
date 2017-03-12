import React, {PropTypes as T} from 'react'
import ReactDOM from 'react-dom'
import {Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap'
import AuthService from 'utils/AuthService'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  };

  render() {
    let {auth} = this.props.route;
    return (
      <div className="jumbotron vertical-center">
        <div className="container text-center" id="hiw-login-container">
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    this.props.route.auth.lock.hide();
  }
  componentDidMount() {
    this.props.route.auth.lock.show();
  }
}

require('styles/containers/Login');

export default Login;
