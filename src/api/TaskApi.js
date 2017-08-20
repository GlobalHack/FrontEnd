import { requestHeaders, taskUrl } from './apiBase';

class TaskApi {
  static getAllTasks() {
    const headers = requestHeaders;
    const request = new Request(taskUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateTask(task) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${taskUrl}${task.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(task),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createTask(task) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(taskUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteTask(task) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${taskUrl}${task.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default TaskApi;
