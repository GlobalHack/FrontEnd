import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {browserHistory, Router, Route, IndexRoute, IndexRedirect} from 'react-router'

/* SHARED SERVICES --- */
require('services/$.serializeObject.js') // USED FOR FORMS

/* CONTAINERS --- */
import Template from 'containers/Template'
import AdminLTE from 'containers/AdminLTE'
import IntakeAdd from 'containers/Intake/Add'
import Settings from 'containers/Settings'
import Login from 'containers/Login'
import CreateUser from 'containers/CreateUser/components/Create'
import LoginLogin from 'containers/Login/Login.jsx'
import Organization from 'containers/Organization/'
import Home from 'containers/Home/'

/* UTILITIES --- */
import AuthService from 'utils/AuthService'
const auth = new AuthService('lY6PHPcT6qeOgVMTuQA57EMxdLDhxtb2', 'benvenker.auth0.com');

/* COMPONENTS --- */
import Icons from 'components/Icons'
import FourOhFour from 'components/FourOhFour'
import ChangePassword from 'containers/Settings/ChangePassword'
import Logout from 'containers/Settings/Logout'
import Account from 'containers/Account/Account'

/* COMBINE REDUCERS --- */
import * as reducers from './reducers'
export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

/* Validating authentication for private routes  */
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'})
  }
}

/* ADD BASE/GLOBAL STYLES --- */
//require('./../styles/base.scss')

/* RENDER WITH REDUX / REACT ROUTER --- */
render((
  <Provider store={ store }>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
      <Route path="/login" component={ Login } auth={ auth }/>
      <Route path="/" component={ AdminLTE } auth={ auth }>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={ Home } onEnter={requireAuth}/>
        {/*<Route path="/intakes" component={ IntakeAdd } onEnter={requireAuth}/>*/}
        <Route path="/icons" component={ Icons } onEnter={requireAuth}/>
        <Route path="/createUser" component={ CreateUser } onEnter={requireAuth}/>
        {/*<Route path="/login" component={ LoginLogin } />*/}
        <Route path="/settings" onEnter={requireAuth}>
          <IndexRoute component={ Settings }/>
        </Route>
        <Route path="*" component={ FourOhFour }/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('ui-container'))
