import questionApi from '../api/QuestionApi';
import * as types from './actionTypes';

export function loadQuestionsSuccess(questions) {
  return {type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function updateQuestionSuccess(question) {
  return {type: types.UPDATE_QUESTION_SUCCESS, question};
}

export function createQuestionSuccess(question) {
  return {type: types.CREATE_QUESTION_SUCCESS, question};
}

export function deleteQuestionSuccess(question) {
  return {type: types.DELETE_QUESTION_SUCCESS, question};
}

export function loadQuestions() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return questionApi.getAllQuestions().then(questions => {
      dispatch(loadQuestionsSuccess(questions));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateQuestion(question) {
  return function (dispatch) {
    return questionApi.updateQuestion(question).then(responseQuestion => {
      dispatch(updateQuestionSuccess(responseQuestion));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createQuestion(question) {
  return function (dispatch) {
    return questionApi.createQuestion(question).then(responseQuestion => {
      dispatch(createQuestionSuccess(responseQuestion));
      return responseQuestion;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteQuestion(question) {
  return function (dispatch) {
    return questionApi.deleteQuestion(question).then(() => {
      console.info(`Deleted ${question.id}`);
      dispatch(deleteQuestionSuccess(question));

    }).catch(error => {
      throw(error);
    });
  };
}
