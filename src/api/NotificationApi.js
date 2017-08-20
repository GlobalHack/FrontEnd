import { notificationUrl, requestHeaders } from './apiBase';

class NotificationApi {
  static getAllNotifications(user) {
    const headers = requestHeaders;
    const request = new Request(`${notificationUrl}?toUser=${user}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateNotification(notification) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${notificationUrl}${notification.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(notification),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createNotification(notification) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(notificationUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(notification),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteNotification(notification) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${notificationUrl}${notification.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default NotificationApi;
