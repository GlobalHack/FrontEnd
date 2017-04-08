import React, {PropTypes as T} from 'react';
import AuthService from '../../utils/AuthService';

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  };

  static propTypes = {
    location: T.object,
    auth    : T.instanceOf(AuthService)
  };

  componentWillUnmount() {
    this.props.route.auth.lock.hide();
  }

  componentDidMount() {
    this.props.route.auth.lock.show();
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
