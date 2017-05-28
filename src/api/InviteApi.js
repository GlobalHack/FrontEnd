import {inviteUrl, requestHeaders} from './apiBase';

class InviteApi {

  static getAllIntakes() {
    const headers = requestHeaders;
    const request = new Request(inviteUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateInvite(invite) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(inviteUrl + `${invite.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(invite)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static sendInvite(invitee) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(inviteUrl+ "new?invitee="+invitee, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createInvite(invite) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(inviteUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(invite)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteInvite(invite) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(inviteUrl + `${invite.id}`, {
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

export default InviteApi;
