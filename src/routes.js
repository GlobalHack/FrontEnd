import React from 'react';
import {IndexRedirect, IndexRoute, Redirect, Route} from 'react-router';
import App from './components/App';
import WelcomePage from './components/base/WelcomePage';
import LoginPage from './components/base/LoginPage';
import EmployeeTablePage from './components/employee/EmployeeTablePage';
import IntakePage from './components/intake/IntakePage';
import AuthService from './utils/AuthService';
import {employeePath, intakePath, homePath} from './utils/pathsHelper';

const auth = new AuthService('lY6PHPcT6qeOgVMTuQA57EMxdLDhxtb2', 'benvenker.auth0.com');

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
      <Route path="/login" component={LoginPage} auth={auth}/>
      <Route path="/" component={App} auth={auth} onEnter={requireAuth}>
        <IndexRedirect to={homePath}/>
        <Route path={homePath} component={WelcomePage}/>
        <Route path={employeePath}>
          <IndexRoute component={EmployeeTablePage}/>
          <Redirect from="*" to={employeePath}/>
        </Route>
        <Route path={intakePath}>
          <IndexRoute component={IntakePage}/>
          <Redirect from="*" to={intakePath}/>
        </Route>
        <Redirect from="*" to={homePath}/>
      </Route>
    </Route>
  );
};

export default makeMainRoutes;
