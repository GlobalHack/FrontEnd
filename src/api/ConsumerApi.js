import {consumerUrl, requestHeaders} from './apiBase';

class ConsumerApi {

  static getConsumer(id) {
    const headers = requestHeaders;
    const request = new Request(consumerUrl + '?id=' + id, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllConsumers() {
    const headers = requestHeaders;
    const request = new Request(consumerUrl + '?limit=0', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      throw(error);
    });
  }

  static updateConsumer(consumer) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(consumerUrl + `${consumer.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(consumer)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createConsumer(consumer) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(consumerUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(consumer)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteConsumer(consumer) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(consumerUrl + `${consumer.id}`, {
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

export default ConsumerApi;
