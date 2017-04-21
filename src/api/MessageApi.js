import {messageUrl, requestHeaders} from './apiBase';

class MessageApi {

  static getAllMessages() {
    const headers = requestHeaders;
    const request = new Request(messageUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateMessage(message) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(messageUrl + `${message.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(message)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createMessage(message) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(messageUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(message)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteMessage(message) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(messageUrl + `${message.id}`, {
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

export default MessageApi;
