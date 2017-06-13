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
import QuestionSetTablePage from './components/questionset/QuestionSetTablePage';
import QuestionSetQuestionsPage from './components/questionset/QuestionSetQuestionsPage';
import AuthService from './utils/AuthService';
import {dashPath, employeePath, homePath, intakePath, questionSetPath} from './utils/pathsHelper';

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
      <Route path="/signup" component={LoginPage} auth={auth} initialScreen="signUp"/>
      <Route path="/password" component={LoginPage} auth={auth} initialScreen="forgotPassword"/>
      <Route path="/" component={App} auth={auth} onEnter={requireAuth}>
        <IndexRedirect to={homePath}/>
        <Route path={homePath} component={WelcomePage} onEnter={requireAuth}/>
        <Route path={dashPath} component={DashboardPage} onEnter={requireAuth}/>
        <Route path="/referrals" component={ReferralPage} onEnter={requireAuth}/>
        <Route path={employeePath} onEnter={requireAuth}>
          <IndexRoute component={EmployeeTablePage}/>
          <Redirect from="*" to={employeePath}/>
        </Route>
        <Route path={intakePath}>
          <IndexRoute component={IntakeTablePage}/>
          <Route path="new" component={IntakePage} onEnter={requireAuth}/>
          <Route path="updated" component={IntakeTablePage} onEnter={requireAuth}/>
          <Route path=":id" component={IntakePage} onEnter={requireAuth}/>
          <Redirect from="*" to={intakePath}/>
        </Route>
        <Route path={questionSetPath}>
          <IndexRoute component={QuestionSetTablePage}/>
          <Route path=":id" component={QuestionSetQuestionsPage} onEnter={requireAuth}/>
          <Redirect from="*" to={questionSetPath}/>
        </Route>
        <Redirect from="*" to={homePath}/>
      </Route>
    </Route>
  );
};

export default makeMainRoutes;
