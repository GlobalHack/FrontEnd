import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const MODELS = [
  'CONSUMER',
  'EMPLOYEE',
  'GROUPMEMBERSHIP',
  'INTAKE',
  'INVITE',
  'MESSAGE',
  'NOTIFICATION',
  'ORGANIZATION',
  'ORGANIZATIONROLE',
  'QUESTION',
  'QUESTIONSET',
  'TASK',
  'USER'
];

const METHODS = ['LOAD', 'CREATE', 'UPDATE', 'DELETE'];
const METHOD_MAP = {
  LOAD: 'GET',
  UPDATE: 'PUT',
  CREATE: 'POST',
  DELETE: 'DELETE'
};

export const additionalActions = [
  'LOAD_INTAKE_QUESTIONNAIRE',
  'LOG_IN_SUCCESS',
  'LOG_OUT'
];

const baseUrl = process.env.REACT_APP_API_HOST;
const apiPrefix = '/api';
const requestHeaders = {
  AUTHORIZATION: `Bearer ${localStorage.jwt}`,
  'Content-Type': 'application/json'
};

export const ACTIONS_TYPES = {};
export const PATHS = {};
export const URLS = {};
export const ACTIONS = {};
export const REDUCERS = {};
export const INITIAL_STATES = {};

const METHOD_REDUCERS = {
  LOAD: action => action.payload,
  CREATE: action => action.payload,
  UPDATE: (state, action) => [
    ...state.filter(obj => obj.id !== action.payload.id),
    Object.assign({}, action.payload)
  ],
  DELETE: (state, action) => [
    ...state.filter(obj => obj.id !== action.payload.id)
  ]
};

const reducer = model => (state = INITIAL_STATES[model], action) => {
  const types = ACTIONS_TYPES[model];
  switch (action.type) {
    case types.LOAD:
      return METHOD_REDUCERS.LOAD(action);
    case types.CREATE:
      return METHOD_REDUCERS.CREATE(action);
    case types.UPDATE:
      return METHOD_REDUCERS.UPDATE(state, action);
    case types.DELETE:
      return METHOD_REDUCERS.DELETE(state, action);
    default:
      return state;
  }
};

const apiCall = (url, method) => args => {
  const request = new Request(url + (args.id || ''), {
    method,
    headers: requestHeaders,
    body: args.body ? JSON.stringify(args.body) : ''
  });

  return fetch(request).then(response => response.json()).catch(error => error);
};

const actionCall = (action, api) => args => dispatch =>
  api(args)
    .then(payload => {
      dispatch({ type: action, payload });
    })
    .catch(error => {
      throw error;
    });

MODELS.forEach(model => {
  PATHS[model] = `/${model}/`;
  const url = `${baseUrl}${apiPrefix}/${model}/`;
  URLS[model] = url;
  INITIAL_STATES[model] = [];
  ACTIONS_TYPES[model] = METHODS.reduce((ret, method) => {
    ret[method] = `${method}_${model}`;
    return ret;
  }, {});
  ACTIONS[model] = METHODS.reduce((ret, method) => {
    ret[method] = actionCall(
      `${method}_${model}`,
      apiCall(url, METHOD_MAP[METHODS])
    );
    return ret;
  }, {});
  REDUCERS[model] = reducer(model);
});

const rootReducer = combineReducers(REDUCERS);

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
