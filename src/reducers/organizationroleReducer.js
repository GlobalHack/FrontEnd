import { browserHistory } from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function organizationroleReducer(state = initialState.organizationroles, action) {
  switch (action.type) {
    case types.LOAD_ORGANIZATIONROLES_SUCCESS:
      return action.organizationroles;
    case types.CREATE_ORGANIZATIONROLE_SUCCESS:
      browserHistory.push(`/organizationroles/${action.organizationrole.id}`);
      return [
        ...state.filter(organizationrole => organizationrole.id !== action.organizationrole.id),
        Object.assign({}, action.organizationrole),
      ];

    case types.UPDATE_ORGANIZATIONROLE_SUCCESS:
      return [
        ...state.filter(organizationrole => organizationrole.id !== action.organizationrole.id),
        Object.assign({}, action.organizationrole),
      ];

    case types.DELETE_ORGANIZATIONROLE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfOrganizationRoleToDelete = state.findIndex(organizationrole => organizationrole.id === action.organizationrole.id);
      newState.splice(indexOfOrganizationRoleToDelete, 1);
      browserHistory.push('/organizationroles');
      return newState;
    }

    default:
      return state;
  }
}
