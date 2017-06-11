import groupmembershipApi from '../api/GroupMembershipApi';
import * as types from './actionTypes';

export function loadGroupMembershipsSuccess(groupmemberships) {
  return {type: types.LOAD_GROUPMEMBERSHIP_SUCCESS, groupmemberships};
}

export function updateGroupMembershipSuccess(groupmembership) {
  return {type: types.UPDATE_GROUPMEMBERSHIP_SUCCESS, groupmembership};
}

export function createGroupMembershipSuccess(groupmembership) {
  return {type: types.CREATE_GROUPMEMBERSHIP_SUCCESS, groupmembership};
}

export function deleteGroupMembershipSuccess(groupmembership) {
  return {type: types.DELETE_GROUPMEMBERSHIP_SUCCESS, groupmembership};
}

export function loadGroupMemberships() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return groupmembershipApi.getAllGroupMemberships().then(groupmemberships => {
      dispatch(loadGroupMembershipsSuccess(groupmemberships));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateGroupMembership(groupmembership) {
  return function (dispatch) {
    return groupmembershipApi.updateGroupMembership(groupmembership).then(responseGroupMembership => {
      dispatch(updateGroupMembershipSuccess(responseGroupMembership));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createGroupMembership(groupmembership) {
  return function (dispatch) {
    return groupmembershipApi.createGroupMembership(groupmembership).then(responseGroupMembership => {
      dispatch(createGroupMembershipSuccess(responseGroupMembership));
      return responseGroupMembership;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteGroupMembership(groupmembership) {
  return function (dispatch) {
    return groupmembershipApi.deleteGroupMembership(groupmembership).then(() => {
      console.info(`Deleted ${groupmembership.id}`);
      dispatch(deleteGroupMembershipSuccess(groupmembership));

    }).catch(error => {
      throw(error);
    });
  };
}
