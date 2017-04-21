import PropTypes from 'prop-types';
import React from 'react';
import AuthService from '../../utils/AuthService';

export class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  };

  componentWillUnmount() {
    this.props.route.auth.lock.hide();
  }

  componentDidMount() {
    this.props.route.auth.lock.show({initialScreen: this.props.route.initialScreen || 'login'});
  }

  render() {
    return (
      <div className="jumbotron vertical-center">
        <div className="container text-center" id="hiw-login-container">
        </div>
      </div>
    );
  }
}

export default Login;
