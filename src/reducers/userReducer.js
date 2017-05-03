import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import {userPath} from '../api/apiBase';
import initialState from './initialState';

export function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOAD_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
}

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {

    case types.LOAD_USERS_SUCCESS:
      return action.users;
    case types.CREATE_USER_SUCCESS:
      browserHistory.push(`${userPath}${action.user.id}`);
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];

    case types.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];

    case types.DELETE_USER_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfUserToDelete = state.findIndex(user => {
        return user.id === action.user.id;
      });
      newState.splice(indexOfUserToDelete, 1);
      browserHistory.push(userPath);
      return newState;
    }

    default:
      return state;
  }
};
