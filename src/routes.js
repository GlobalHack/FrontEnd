import React from 'react';
import {IndexRedirect, IndexRoute, Redirect, Route} from 'react-router';
import App from './components/App';
import DashboardPage from './components/base/DashboardPage';
import LoginPage from './components/base/LoginPage';
import ReferralPage from './components/referrals/ReferralPage';
import WelcomePage from './components/base/WelcomePage';
import EmployeeTablePage from './components/employee/EmployeeTablePage';
import IntakePage from './components/intake/IntakePage';
import IntakeTablePage from './components/intake/IntakeTablePage';
import AuthService from './utils/AuthService';
import {dashPath, employeePath, homePath, intakePath} from './utils/pathsHelper';

const auth = new AuthService(`${process.env.REACT_APP_AUTH0CLIENTID}`, `${process.env.REACT_APP_AUTH0DOMAIN}`, 'login');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login'
      // state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const makeMainRoutes = () => {
  return (
    <Route>
      <Route path="/login" component={LoginPage} auth={auth} initialScreen="login"/>
      <Route path="/referrals" component={ReferralPage} initialScreen="referral"/>
      <Route path="/signup" component={LoginPage} auth={auth} initialScreen="signUp"/>
      <Route path="/password" component={LoginPage} auth={auth} initialScreen="forgotPassword"/>
      <Route path="/" component={App} auth={auth} onEnter={requireAuth}>
        <IndexRedirect to={homePath}/>
        <Route path={homePath} component={WelcomePage}/>
        <Route path={dashPath} component={DashboardPage}/>
        <Route path={employeePath}>
          <IndexRoute component={EmployeeTablePage}/>
          <Redirect from="*" to={employeePath}/>
        </Route>
        <Route path={intakePath}>
          <IndexRoute component={IntakeTablePage}/>
          <Route path="new" component={IntakePage}/>
          <Route path=":id" component={IntakePage}/>
          <Redirect from="*" to={intakePath}/>
        </Route>
        <Redirect from="*" to={homePath}/>
      </Route>
    </Route>
  );
};

export default makeMainRoutes;
