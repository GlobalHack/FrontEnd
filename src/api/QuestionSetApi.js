import {questionSetUrl, requestHeaders} from './apiBase';

class QuestionSetApi {

  static getQuestionSetSchema(questionSetId) {
    const headers = requestHeaders;
    const request = new Request(questionSetUrl + 'schemaform?id=' + `${questionSetId}`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      throw(error);
    });
  }

  static getAllQuestionSets() {
    const headers = requestHeaders;
    const request = new Request(questionSetUrl + '?populate=true', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateQuestionSet(questionSet) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionSetUrl + `${questionSet.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(questionSet)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createQuestionSet(questionSet) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionSetUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(questionSet)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteQuestionSet(questionSet) {
    const headers = Object.assign({'Content-Type': 'application/json'}, requestHeaders);
    const request = new Request(questionSetUrl + `${questionSet.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getQuestionSetQuestions(questionSet) {
    return
  }

  static addQuestionSetQuestion(questionSet, question) {
    return
  }

  static deleteQuestionSetQuestion(questionSet, question) {
    return 
  }
}

export default QuestionSetApi;
