import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Data from '../data';
import ThemeDefault from '../theme-default';
import Header from './base/Header';
import LeftDrawer from './base/LeftDrawer';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import * as employeeActions from '../actions/employeeActions';
import * as organizationActions from '../actions/organizationActions';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navDrawerOpen: true,
      profile: this.props.route.auth.getProfile()
    };
    this.props.route.auth.on('profile_updated', newProfile => {
      this.setState({ profile: newProfile });
    });
    // console.log(this.state.profile);
    // console.log(this.props.user);
    if (this.state.profile && !this.props.user.id) {
      this.props.actions.loadUser(this.state.profile.uid).then(user => {
        if (user.employee) {
          this.props.actions.loadEmployee(user.employee).then(employee => {
            if (employee.organization) {
              this.props.actions.loadOrganization(employee.organization);
            }
          });
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth // sends auth instance to children
      });
    }

    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft:
          navDrawerOpen && this.props.width !== SMALL
            ? paddingLeftDrawerOpen
            : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
              this
            )}
            auth={this.props.route.auth}
          />

          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            menus={Data.menus}
            adminmenus={Data.adminmenus}
            auth={this.props.route.auth}
          />

          <div style={styles.container}>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
  user: PropTypes.object.isRequired,
  route: PropTypes.object,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, userActions, employeeActions, organizationActions),
      dispatch
    )
  };
}

export default withWidth()(connect(mapStateToProps, mapDispatchToProps)(App));
