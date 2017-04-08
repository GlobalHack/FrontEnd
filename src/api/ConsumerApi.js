import {consumerUrl, requestHeaders} from './apiBase';

class ConsumerApi {

  static getAllConsumers() {
    const headers = requestHeaders;
    const request = new Request(consumerUrl, {
      method : 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateConsumer(consumer) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(consumerUrl + `${consumer.id}`, {
      method : 'PUT',
      headers: headers,
      body   : JSON.stringify(consumer)
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
      method : 'POST',
      headers: headers,
      body   : JSON.stringify(consumer)
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

export default ConsumerApi;
