import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groupmembershipReducer(state = initialState.groupmemberships, action) {
  switch (action.type) {

    case types.LOAD_GROUPMEMBERSHIP_SUCCESS:
      return action.groupmemberships;

    case types.CREATE_GROUPMEMBERSHIP_SUCCESS:
      browserHistory.push(`/groupmemberships/${action.groupmembership.id}`);
      return [
        ...state.filter(groupmembership => groupmembership.id !== action.groupmembership.id),
        Object.assign({}, action.groupmembership)
      ];

    case types.UPDATE_GROUPMEMBERSHIP_SUCCESS:
      return [
        ...state.filter(groupmembership => groupmembership.id !== action.groupmembership.id),
        Object.assign({}, action.groupmembership)
      ];

    case types.DELETE_GROUPMEMBERSHIP_SUCCESS: {
      const newState                       = Object.assign([], state);
      const indexOfGroupMembershipToDelete = state.findIndex(groupmembership => {
        return groupmembership.id == action.groupmembership.id;
      });
      newState.splice(indexOfGroupMembershipToDelete, 1);
      browserHistory.push('/groupmemberships');
      return newState;
    }

    default:
      return state;
  }
};
