import { browserHistory } from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function questionSetSchemaReducer(state = initialState.questionSetFormSchema, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONSET_SCHEMA_SUCCESS:
      return action.questionSetFormSchema;
    default:
      return state;
  }
}

export default function questionSetReducer(state = initialState.questionSets, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONSETS_SUCCESS:
      return action.questionSets;
    case types.CREATE_QUESTIONSET_SUCCESS:
      browserHistory.push(`/questionSets/${action.questionSet.id}`);
      return [
        ...state.filter(questionSet => questionSet.id !== action.questionSet.id),
        Object.assign({}, action.questionSet),
      ];

    case types.UPDATE_QUESTIONSET_SUCCESS:
      return [
        ...state.filter(questionSet => questionSet.id !== action.questionSet.id),
        Object.assign({}, action.questionSet),
      ];

    case types.DELETE_QUESTIONSET_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfQuestionSetToDelete = state.findIndex(questionSet => questionSet.id === action.questionSet.id);
      newState.splice(indexOfQuestionSetToDelete, 1);
      browserHistory.push('/questionSets');
      return newState;
    }

    default:
      return state;
  }
}
