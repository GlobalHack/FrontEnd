import PropTypes from 'prop-types';
import React from 'react';
import AuthService from '../../utils/AuthService';

export class Referral extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    location: PropTypes.object,
    // auth: PropTypes.instanceOf(AuthService)
  };

  componentWillUnmount() {
    // this.props.route.auth.lock.hide();
  }

  componentDidMount() {
    // this.props.route.auth.lock.show({initialScreen: this.props.route.initialScreen || 'login'});
  }

  render() {
    return (
      <div className="jumbotron vertical-center">
          <iframe className="referrals" src="https://cemaritan-referrals.herokuapp.com" width="100%" height="100%" />
      </div>
    );
  }
}

export default Referral;
