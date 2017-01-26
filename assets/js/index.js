import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { browserHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router'

/* SHARED SERVICES --- */
require('services/$.serializeObject.js') // USED FOR FORMS

/* CONTAINERS --- */
import Shelter from 'containers/Shelter'
import IntakeAdd from 'containers/Intake/Add'
import Login from 'containers/Login'
import CreateUser from 'containers/CreateUser/components/Create'

/* UTILITIES --- */
import AuthService from 'utils/AuthService'
const auth = new AuthService('lY6PHPcT6qeOgVMTuQA57EMxdLDhxtb2', 'benvenker.auth0.com');

console.log( auth )

import ChangePassword from 'containers/AccountManage/ChangePassword'

/* COMPONENTS --- */
import LoginLogin from 'containers/Login/Login.jsx'
import Icons from 'components/Icons'
import FourOhFour from 'components/FourOhFour'

/* COMBINE REDUCERS --- */
import * as reducers from './reducers'
export const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
)

/* ADD BASE/GLOBAL STYLES --- */
require('./../styles/base.scss')

/* RENDER WITH REDUX / REACT ROUTER --- */
render((
    <Provider store={ store }>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
            <Route path="/" component={ Shelter } auth={ auth }>
                <IndexRoute component={ IntakeAdd } />
                <Route path="/intakes" component={ IntakeAdd } />
                <IndexRoute component={CreateUser} />
                <Route path="/createUser" component={CreateUser} />
				<IndexRoute component={ChangePassword} />
                <Route path="/AccountManage" component={ChangePassword} />
                <Route path="/icons" component={ Icons } />
                <Route path="/login" component={ LoginLogin } />
                <Route path="*" component={ FourOhFour }/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'))