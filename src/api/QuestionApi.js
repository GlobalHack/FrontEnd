import {questionUrl, requestHeaders} from './apiBase';

class QuestionApi {

  static getAllQuestions() {
    const headers = requestHeaders;
    const request = new Request(questionUrl, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateQuestion(question) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionUrl + `${question.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(question)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createQuestion(question) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(question)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteQuestion(question) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionUrl + `${question.id}`, {
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

export default QuestionApi;
