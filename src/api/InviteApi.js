import { inviteUrl, requestHeaders } from './apiBase';

class InviteApi {
  static getAllIntakes() {
    const headers = requestHeaders;
    const request = new Request(inviteUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateInvite(invite) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${inviteUrl}${invite.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(invite),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static sendInvite(invitee) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${inviteUrl}new?invitee=${invitee}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createInvite(invite) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(inviteUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(invite),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteInvite(invite) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${inviteUrl}${invite.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default InviteApi;
