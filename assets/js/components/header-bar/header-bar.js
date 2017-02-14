import React, {PropTypes as T} from 'react'
import { browserHistory } from 'react-router';
import $ from 'jquery'
import AuthService from '../../utils/AuthService'
import HeaderMessages from './header-messages/header-messages'
import HeaderNotifications from './header-notifications/header-notifications'
import HeaderTasks from './header-tasks/header-tasks'

export class HeaderBar extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    // listen to profile_updated events to update internal state
    props.auth.on('profile_updated', (newProfile) => {
       this.setState({profile: newProfile})
    })
  }

  logout() {
    this.props.auth.logout();
    browserHistory.push('/login');
  }

  pushMenu() {
    var body = document.body;
    if (body.clientWidth > 768) {
      if (body.className.indexOf('sidebar-collapse') === -1) {
        body.className += ' sidebar-collapse';
      } else {
        body.className = body.className.replace(' sidebar-collapse', '');
      }
    } else {
      if (body.className.indexOf('sidebar-open') === -1) {
        body.className += ' sidebar-open';
      } else {
        body.className = body.className.replace(' sidebar-open', '');
      }
    }
  }

  render() {
    var {profile} = this.state
    if (!profile || !profile.email) profile = {email:"Demo",name:"Demo"};
    var that = this;
    return (
      <header className="main-header">
        {/* Logo */}
        <a href="index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>A</b>LT</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">Cemaritan</span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top" role="navigation">
          {/* Sidebar toggle button*/}
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Messages: style can be found in dropdown.less*/}
              {/*<HeaderMessages />*/}
              {/* Notifications: style can be found in dropdown.less */}
              {/*<HeaderNotifications />*/}
              {/* Tasks: style can be found in dropdown.less */}
              {/*<HeaderTasks />*/}
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="http://lorempixel.com/160/160/" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">{profile.email}</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <img src="http://lorempixel.com/160/160/" className="img-circle" alt="User Image"/>
                    <p>
                      {profile.name} - OrganizationName
                      {/*<small>OrganizationRole</small>*/}
                    </p>

                    <br />

                  </li>
                  {/* Menu Body */}
                  {/*<li className="user-body">*/}
                    {/*<div className="col-xs-4 text-center">*/}
                      {/*<a href="#">Followers</a>*/}
                    {/*</div>*/}
                    {/*<div className="col-xs-4 text-center">*/}
                      {/*<a href="#">Sales</a>*/}
                    {/*</div>*/}
                    {/*<div className="col-xs-4 text-center">*/}
                      {/*<a href="#">Friends</a>*/}
                    {/*</div>*/}
                  {/*</li>*/}
                  {/* Menu Footer */}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat" onClick={this.logout.bind(this)}>Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
};

export default HeaderBar;
