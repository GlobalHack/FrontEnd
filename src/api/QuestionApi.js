import { questionUrl, requestHeaders } from './apiBase';

class QuestionApi {
  static getAllQuestions() {
    const headers = requestHeaders;
    const request = new Request(questionUrl, {
      method: 'GET',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateQuestion(question) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${questionUrl}${question.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(question),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static createQuestion(question) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(questionUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(question),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteQuestion(question) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, requestHeaders);
    const request = new Request(`${questionUrl}${question.id}`, {
      method: 'DELETE',
      headers,
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default QuestionApi;
