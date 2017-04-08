import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function inviteReducer(state = initialState.invites, action) {
  switch (action.type) {

    case types.LOAD_INVITES_SUCCESS:
      return action.invites;
    case types.CREATE_INVITE_SUCCESS:
      browserHistory.push(`/invites/${action.invite.id}`);
      return [
        ...state.filter(invite => invite.id !== action.invite.id),
        Object.assign({}, action.invite)
      ];

    case types.UPDATE_INVITE_SUCCESS:
      return [
        ...state.filter(invite => invite.id !== action.invite.id),
        Object.assign({}, action.invite)
      ];

    case types.DELETE_INVITE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfInviteToDelete = state.findIndex(invite => {
        return invite.id == action.invite.id;
      });
      newState.splice(indexOfInviteToDelete, 1);
      browserHistory.push('/invites');
      return newState;
    }

    default:
      return state;
  }
};
