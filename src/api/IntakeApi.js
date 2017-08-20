import { intakeUrl, requestHeaders } from './apiBase';

class IntakeApi {
  static getIntakeSchema() {
    const headers = requestHeaders;
    const request = new Request(`${intakeUrl}schema`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static getAllIntakes() {
    const headers = requestHeaders;
    const request = new Request(`${intakeUrl}?populate=consumer`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static getIntake(id) {
    const headers = requestHeaders;
    const request = new Request(`${intakeUrl}?id=${id}&populate=consumer`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static getIntakeQuestionnaire(id) {
    const headers = requestHeaders;
    const request = new Request(`${intakeUrl}get?id=${id}`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json((k, v) => ((typeof v === 'object' || isNaN(v)) ? v : parseInt(v, 10)))).catch((error) => {
      throw (error);
    });
  }

  static updateIntake(intake) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${intakeUrl}${intake.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(intake),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createIntake(intake) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(intakeUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(intake),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteIntake(intake) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${intakeUrl}${intake.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default IntakeApi;
