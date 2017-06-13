import questionSetApi from '../api/QuestionSetApi';
import * as types from './actionTypes';

export function loadQuestionSetsSuccess(questionSets) {
  return {type: types.LOAD_QUESTIONSETS_SUCCESS, questionSets};
}

export function updateQuestionSetSuccess(questionSet) {
  return {type: types.UPDATE_QUESTIONSET_SUCCESS, questionSet};
}

export function createQuestionSetSuccess(questionSet) {
  return {type: types.CREATE_QUESTIONSET_SUCCESS, questionSet};
}

export function deleteQuestionSetSuccess(questionSet) {
  return {type: types.DELETE_QUESTIONSET_SUCCESS, questionSet};
}

export function loadQuestionSetSchemaSuccess(questionSetFormSchema) {
  return {type: types.LOAD_QUESTIONSET_SCHEMA_SUCCESS, questionSetFormSchema};
}

export function loadQuestionSetSchema(questionSetId) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return questionSetApi.getQuestionSetSchema(questionSetId).then(questionSetFormSchema => {
      dispatch(loadQuestionSetSchemaSuccess(questionSetFormSchema));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadQuestionSets() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return questionSetApi.getAllQuestionSets().then(questionSets => {
      dispatch(loadQuestionSetsSuccess(questionSets));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateQuestionSet(questionSet) {
  return function (dispatch) {
    return questionSetApi.updateQuestionSet(questionSet).then(responseQuestionSet => {
      dispatch(updateQuestionSetSuccess(responseQuestionSet));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createQuestionSet(questionSet) {
  return function (dispatch) {
    return questionSetApi.createQuestionSet(questionSet).then(responseQuestionSet => {
      dispatch(createQuestionSetSuccess(responseQuestionSet));
      return responseQuestionSet;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteQuestionSet(questionSet) {
  return function (dispatch) {
    return questionSetApi.deleteQuestionSet(questionSet).then(() => {
      console.log(`Deleted ${questionSet.id}`);
      dispatch(deleteQuestionSetSuccess(questionSet));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
