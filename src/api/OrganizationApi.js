import { organizationUrl, requestHeaders } from './apiBase';

class OrganizationApi {
  static getOrganization(id) {
    const headers = requestHeaders;
    const request = new Request(`${organizationUrl}?id=${id}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static getAllOrganizations() {
    const headers = requestHeaders;
    const request = new Request(organizationUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static updateOrganization(organization) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${organizationUrl}${organization.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(organization),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createOrganization(organization) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(organizationUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(organization),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteOrganization(organization) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${organizationUrl}${organization.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default OrganizationApi;
