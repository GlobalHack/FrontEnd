import {notificationUrl, requestHeaders} from './apiBase';

class NotificationApi {

  static getAllNotifications() {
    const headers = requestHeaders;
    const request = new Request(notificationUrl, {
      method : 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateNotification(notification) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(notificationUrl + `${notification.id}`, {
      method : 'PUT',
      headers: headers,
      body   : JSON.stringify(notification)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createNotification(notification) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(notificationUrl, {
      method : 'POST',
      headers: headers,
      body   : JSON.stringify(notification)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteNotification(notification) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(notificationUrl + `${notification.id}`, {
      method : 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default NotificationApi;
