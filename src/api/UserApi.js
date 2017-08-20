import { userUrl, requestHeaders } from './apiBase';

class UserApi {
  static getUser(id) {
    const headers = requestHeaders;
    const request = new Request(`${userUrl}?id=${id}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static getAllUsers() {
    const headers = requestHeaders;
    const request = new Request(userUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateUser(user) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${userUrl}${user.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(user),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createUser(user) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(userUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteUser(user) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${userUrl}${user.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default UserApi;
