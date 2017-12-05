import React from 'react';
import { IndexRedirect, IndexRoute, Redirect, Route } from 'react-router';
import App from './components/App';
import DashboardPage from './components/base/DashboardPage';
import LoginPage from './components/base/LoginPage';
import ReferralTablePage from './components/referrals/ReferralTablePage';
import WelcomePage from './components/base/WelcomePage';
import EmployeeTablePage from './components/employee/EmployeeTablePage';
import IntakePage from './components/intake/IntakePage';
import IntakeTablePage from './components/intake/IntakeTablePage';
import AuthService from './utils/AuthService';
import { PATHS } from './data';

const auth = new AuthService(
  `${process.env.REACT_APP_AUTH0CLIENTID}`,
  `${process.env.REACT_APP_AUTH0DOMAIN}`,
  'login'
);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  // if (!auth.loggedIn()) {
  //   replace({
  //     pathname: '/login'
  //     // state: { nextPathname: nextState.location.pathname }
  //   });
  // }
};

export const makeMainRoutes = () => {
  return (
    <Route>
      <Route
        path={PATHS['login']}
        component={LoginPage}
        auth={auth}
        initialScreen="login"
      />
      <Route
        path={PATHS['signup']}
        component={LoginPage}
        auth={auth}
        initialScreen="signUp"
      />
      <Route
        path={PATHS['password']}
        component={LoginPage}
        auth={auth}
        initialScreen="forgotPassword"
      />
      <Route path="/" component={App} auth={auth} onEnter={requireAuth}>
        <IndexRedirect to={PATHS['home']} />
        <Route
          path={PATHS['home']}
          component={WelcomePage}
          onEnter={requireAuth}
        />
        <Route
          path={PATHS['dash']}
          component={DashboardPage}
          onEnter={requireAuth}
        />
        <Route
          path={PATHS['referrals']}
          component={ReferralTablePage}
          onEnter={requireAuth}
        />
        <Route path={PATHS['employees']} onEnter={requireAuth}>
          <IndexRoute component={EmployeeTablePage} />
          <Redirect from="*" to={PATHS['employees']} />
        </Route>
        <Route path={PATHS['intakes']}>
          <IndexRoute component={IntakeTablePage} />
          <Route path="new" component={IntakePage} onEnter={requireAuth} />
          <Route
            path="updated"
            component={IntakeTablePage}
            onEnter={requireAuth}
          />
          <Route path=":id" component={IntakePage} onEnter={requireAuth} />
          <Redirect from="*" to={PATHS['intakes']} />
        </Route>
        <Redirect from="*" to={PATHS['home']} />
      </Route>
    </Route>
  );
};

export default makeMainRoutes;
