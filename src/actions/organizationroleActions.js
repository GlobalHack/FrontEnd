import organizationroleApi from '../api/OrganizationRoleApi';
import * as types from './actionTypes';

export function loadOrganizationRolesSuccess(organizationroles) {
  return {type: types.LOAD_ORGANIZATIONROLES_SUCCESS, organizationroles};
}

export function updateOrganizationRoleSuccess(organizationrole) {
  return {type: types.UPDATE_ORGANIZATIONROLE_SUCCESS, organizationrole};
}

export function createOrganizationRoleSuccess(organizationrole) {
  return {type: types.CREATE_ORGANIZATIONROLE_SUCCESS, organizationrole};
}

export function deleteOrganizationRoleSuccess(organizationrole) {
  return {type: types.DELETE_ORGANIZATIONROLE_SUCCESS, organizationrole};
}

export function loadOrganizationRoles() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return organizationroleApi.getAllOrganizationRoles().then(organizationroles => {
      dispatch(loadOrganizationRolesSuccess(organizationroles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateOrganizationRole(organizationrole) {
  return function (dispatch) {
    return organizationroleApi.updateOrganizationRole(organizationrole).then(responseOrganizationRole => {
      dispatch(updateOrganizationRoleSuccess(responseOrganizationRole));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createOrganizationRole(organizationrole) {
  return function (dispatch) {
    return organizationroleApi.createOrganizationRole(organizationrole).then(responseOrganizationRole => {
      dispatch(createOrganizationRoleSuccess(responseOrganizationRole));
      return responseOrganizationRole;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteOrganizationRole(organizationrole) {
  return function (dispatch) {
    return organizationroleApi.deleteOrganizationRole(organizationrole).then(() => {
      console.info(`Deleted ${organizationrole.id}`);
      dispatch(deleteOrganizationRoleSuccess(organizationrole));

    }).catch(error => {
      throw(error);
    });
  };
}
