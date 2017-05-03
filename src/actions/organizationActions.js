import organizationApi from '../api/OrganizationApi';
import * as types from './actionTypes';

export function loadOrganizationSuccess(organization) {
  return {type: types.LOAD_ORGANIZATION_SUCCESS, organization};
}

export function loadOrganizationsSuccess(organizations) {
  return {type: types.LOAD_ORGANIZATIONS_SUCCESS, organizations};
}

export function updateOrganizationSuccess(organization) {
  return {type: types.UPDATE_ORGANIZATION_SUCCESS, organization};
}

export function createOrganizationSuccess(organization) {
  return {type: types.CREATE_ORGANIZATION_SUCCESS, organization};
}

export function deleteOrganizationSuccess(organization) {
  return {type: types.DELETE_ORGANIZATION_SUCCESS, organization};
}

export function loadOrganization(id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return organizationApi.getOrganization(id).then(organization => {
      dispatch(loadOrganizationSuccess(organization));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadOrganizations() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return organizationApi.getAllOrganizations().then(organizations => {
      dispatch(loadOrganizationsSuccess(organizations));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateOrganization(organization) {
  return function (dispatch) {
    return organizationApi.updateOrganization(organization).then(responseOrganization => {
      dispatch(updateOrganizationSuccess(responseOrganization));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createOrganization(organization) {
  return function (dispatch) {
    return organizationApi.createOrganization(organization).then(responseOrganization => {
      dispatch(createOrganizationSuccess(responseOrganization));
      return responseOrganization;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteOrganization(organization) {
  return function (dispatch) {
    return organizationApi.deleteOrganization(organization).then(() => {
      console.log(`Deleted ${organization.id}`);
      dispatch(deleteOrganizationSuccess(organization));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
