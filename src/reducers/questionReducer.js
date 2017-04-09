import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionReducer(state = initialState.questions, action) {
  switch (action.type) {

    case types.LOAD_QUESTIONS_SUCCESS:
      return action.questions;
    case types.CREATE_QUESTION_SUCCESS:
      browserHistory.push(`/questions/${action.question.id}`);
      return [
        ...state.filter(question => question.id !== action.question.id),
        Object.assign({}, action.question)
      ];

    case types.UPDATE_QUESTION_SUCCESS:
      return [
        ...state.filter(question => question.id !== action.question.id),
        Object.assign({}, action.question)
      ];

    case types.DELETE_QUESTION_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfQuestionToDelete = state.findIndex(question => {
        return question.id === action.question.id;
      });
      newState.splice(indexOfQuestionToDelete, 1);
      browserHistory.push('/questions');
      return newState;
    }

    default:
      return state;
  }
};
