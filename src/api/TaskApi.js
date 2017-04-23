import {requestHeaders, taskUrl} from './apiBase';

class TaskApi {

  static getAllTasks() {
    const headers = requestHeaders;
    const request = new Request(taskUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateTask(task) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(taskUrl + `${task.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(task)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createTask(task) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(taskUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(task)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteTask(task) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(taskUrl + `${task.id}`, {
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

export default TaskApi;
