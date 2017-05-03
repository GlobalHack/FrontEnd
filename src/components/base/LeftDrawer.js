import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {spacing, typography} from 'material-ui/styles';
import {blue600, white} from 'material-ui/styles/colors';
import React from 'react';
import {Link} from 'react-router';
import AuthService from '../../utils/AuthService';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class LeftDrawer extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: props.auth.getProfile()
    };
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  static propTypes = {
    navDrawerOpen: PropTypes.bool,
    menus: PropTypes.array,
    username: PropTypes.string,
    auth: PropTypes.instanceOf(AuthService)
  };

  styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: 'url(/images/header-banner-17.png)',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  render() {
    let {navDrawerOpen} = this.props;
    return (
      <Drawer
        docked={true}
        open={navDrawerOpen}>
        <div style={this.styles.avatar.div}>
          <Avatar
            src={this.state.profile.picture}
            size={50}
            style={this.styles.avatar.icon}/>
          <span style={this.styles.avatar.span}>{this.state.profile.nickname}</span>
        </div>
        <div>
          {this.props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={this.styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
          {this.props.employee.role==="Admin" && this.props.adminmenus.map((menu, index) =>
            <MenuItem
              key={index}
              style={this.styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
        <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <a width="150" height="50" href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss"
             target="_blank" alt="Single Sign On & Token Based Authentication - Auth0"><img width="150"
                                                                                            height="50"
                                                                                            alt="JWT Auth for open source projects"
                                                                                            src="//cdn.auth0.com/oss/badges/a0-badge-dark.png"/></a>
        </div>


      </Drawer>
    );
  };
}

LeftDrawer.propTypes = {
  employee: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    employee: state.employee,
    organization: state.organization
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
