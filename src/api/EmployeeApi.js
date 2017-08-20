import { employeeUrl, requestHeaders } from './apiBase';

class EmployeeApi {
  static getEmployee(id) {
    const headers = requestHeaders;
    const request = new Request(`${employeeUrl}?id=${id}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static getAllEmployees() {
    const headers = requestHeaders;
    const request = new Request(employeeUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateEmployee(employee) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${employeeUrl}${employee.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(employee),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createEmployee(employee) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(employeeUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(employee),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteEmployee(employee) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${employeeUrl}${employee.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default EmployeeApi;
