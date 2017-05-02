import {organizationUrl, requestHeaders} from './apiBase';

class OrganizationApi {

  static getOrganization(id) {
    const headers = requestHeaders;
    const request = new Request(organizationUrl + '?id=' + id, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      throw(error);
    });
  }

  static getAllOrganizations() {
    const headers = requestHeaders;
    const request = new Request(organizationUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      throw(error);
    });
  }

  static updateOrganization(organization) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationUrl + `${organization.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(organization)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createOrganization(organization) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(organization)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteOrganization(organization) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(organizationUrl + `${organization.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default OrganizationApi;
