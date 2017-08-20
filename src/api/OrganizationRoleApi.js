import { organizationroleUrl, requestHeaders } from './apiBase';

class OrganizationRoleApi {
  static getAllOrganizationRoles() {
    const headers = requestHeaders;
    const request = new Request(organizationroleUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateOrganizationRole(organizationrole) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${organizationroleUrl}${organizationrole.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(organizationrole),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createOrganizationRole(organizationrole) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(organizationroleUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(organizationrole),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteOrganizationRole(organizationrole) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${organizationroleUrl}${organizationrole.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default OrganizationRoleApi;
