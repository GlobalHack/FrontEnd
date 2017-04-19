import {intakeUrl, requestHeaders} from './apiBase';

class IntakeApi {

  static getIntakeSchema() {
    const headers = requestHeaders;
    const request = new Request(intakeUrl + 'schema', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllIntakes() {
    const headers = requestHeaders;
    const request = new Request(intakeUrl + '?populate=consumer', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateIntake(intake) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(intakeUrl + `${intake.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(intake)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createIntake(intake) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(intakeUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(intake)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteIntake(intake) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(intakeUrl + `${intake.id}`, {
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

export default IntakeApi;
