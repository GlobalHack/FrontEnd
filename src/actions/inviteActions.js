import inviteApi from '../api/InviteApi';
import * as types from './actionTypes';

export function loadInvitesSuccess(invites) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, invites};
}

export function updateInviteSuccess(invite) {
  return {type: types.UPDATE_EMPLOYEE_SUCCESS, invite};
}

export function createInviteSuccess(invite) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, invite};
}

export function deleteInviteSuccess(invite) {
  return {type: types.DELETE_EMPLOYEE_SUCCESS, invite};
}

export function loadInvites() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return inviteApi.getAllInvites().then(invites => {
      dispatch(loadInvitesSuccess(invites));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateInvite(invite) {
  return function (dispatch) {
    return inviteApi.updateInvite(invite).then(responseInvite => {
      dispatch(updateInviteSuccess(responseInvite));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createEmployee(invite) {
  return function (dispatch) {
    return inviteApi.createInvite(invite).then(responseInvite => {
      dispatch(createInviteSuccess(responseInvite));
      return responseInvite;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteInvite(invite) {
  return function (dispatch) {
    return inviteApi.deleteInvite(invite).then(() => {
      console.info(`Deleted ${invite.id}`);
      dispatch(deleteInviteSuccess(invite));

    }).catch(error => {
      throw(error);
    });
  };
}
