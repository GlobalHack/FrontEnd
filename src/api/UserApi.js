import {userUrl, requestHeaders} from './apiBase';

class UserApi {

  static getUser(id) {
    const headers = requestHeaders;
    const request = new Request(userUrl + '?id=' + id, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllUsers() {
    const headers = requestHeaders;
    const request = new Request(userUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateUser(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(userUrl + `${user.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(user)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createUser(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(userUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(user)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteUser(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(userUrl + `${user.id}`, {
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

export default UserApi;
