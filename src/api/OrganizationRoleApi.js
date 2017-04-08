import {organizationroleUrl, requestHeaders} from './apiBase';

class OrganizationRoleApi {

  static getAllOrganizationRoles() {
    const headers = requestHeaders;
    const request = new Request(organizationroleUrl, {
      method : 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateOrganizationRole(organizationrole) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationroleUrl + `${organizationrole.id}`, {
      method : 'PUT',
      headers: headers,
      body   : JSON.stringify(organizationrole)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createOrganizationRole(organizationrole) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationroleUrl, {
      method : 'POST',
      headers: headers,
      body   : JSON.stringify(organizationrole)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteOrganizationRole(organizationrole) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationroleUrl + `${organizationrole.id}`, {
      method : 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default OrganizationRoleApi;
