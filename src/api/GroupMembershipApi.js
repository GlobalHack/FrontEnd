import { groupmembershipUrl, requestHeaders } from './apiBase';

class GroupMembershipApi {
  static getAllGroupMemberships() {
    const headers = requestHeaders;
    const request = new Request(groupmembershipUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateGroupMembership(groupmembership) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${groupmembershipUrl}${groupmembership.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(groupmembership),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createGroupMembership(groupmembership) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(groupmembershipUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(groupmembership),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteGroupMembership(groupmembership) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${groupmembershipUrl}${groupmembership.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default GroupMembershipApi;
