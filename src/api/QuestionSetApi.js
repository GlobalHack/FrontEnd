import { questionSetUrl, requestHeaders } from './apiBase';

class QuestionSetApi {
  static getQuestionSetSchema() {
    const headers = requestHeaders;
    const request = new Request(`${questionSetUrl}schemaform?id=1`, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch((error) => {
      throw (error);
    });
  }

  static getAllQuestionSets() {
    const headers = requestHeaders;
    const request = new Request(questionSetUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateQuestionSet(questionSet) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${questionSetUrl}${questionSet.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(questionSet),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createQuestionSet(questionSet) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(questionSetUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(questionSet),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteQuestionSet(questionSet) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${questionSetUrl}${questionSet.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default QuestionSetApi;
