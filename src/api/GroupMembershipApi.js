import {groupmembershipUrl, requestHeaders} from './apiBase';

class GroupMembershipApi {

  static getAllGroupMemberships() {
    const headers = requestHeaders;
    const request = new Request(groupmembershipUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateGroupMembership(groupmembership) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(groupmembershipUrl + `${groupmembership.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(groupmembership)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createGroupMembership(groupmembership) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(groupmembershipUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(groupmembership)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteGroupMembership(groupmembership) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(groupmembershipUrl + `${groupmembership.id}`, {
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

export default GroupMembershipApi;
