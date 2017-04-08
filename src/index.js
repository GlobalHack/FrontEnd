import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import makeMainRoutes from './routes';
import configureStore from './store/configureStore';
import './styles.css';

injectTapEventPlugin();

const routes = makeMainRoutes();
const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes}
            onUpdate={() => window.scrollTo(0, 0)}
            history={browserHistory}
    />
  </Provider>,
  document.getElementById('app')
);
