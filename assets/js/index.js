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

/* COMPONENTS --- */
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
            <Route path="/" component={ Shelter }>
                <IndexRoute component={ IntakeAdd } />
                <Route path="/intakes" component={ IntakeAdd } />
                <Route path="/icons" component={ Icons } />
                 <Route path="*" component={ FourOhFour }/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'))