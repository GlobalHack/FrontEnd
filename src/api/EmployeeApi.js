import {employeeUrl, requestHeaders} from './apiBase';

class EmployeeApi {

  static getEmployee(id) {
    const headers = requestHeaders;
    const request = new Request(employeeUrl + '?id=' + id, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllEmployees() {
    const headers = requestHeaders;
    const request = new Request(employeeUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateEmployee(employee) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(employeeUrl + `${employee.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(employee)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createEmployee(employee) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(employeeUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(employee)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteEmployee(employee) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(employeeUrl + `${employee.id}`, {
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

export default EmployeeApi;
