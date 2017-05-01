import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function intakeSchemaReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_INTAKE_SCHEMA_SUCCESS:
      return action.formschema;
    default:
      return state;
  }
}

export function intakeReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_INTAKE_SUCCESS:
      return action.intake;
    case types.CREATE_INTAKE_SUCCESS:
      return action.intake;
    case types.UPDATE_INTAKE_SUCCESS:
      return action.intake;
    default:
      return state;
  }
}

export function intakeQuestionnaireReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_INTAKE_QUESTIONNAIRE_SUCCESS:
      return action.intakeQuestionnaire;
    default:
      return state;
  }
}

export default function intakesReducer(state = initialState.intakes, action) {
  switch (action.type) {

    case types.LOAD_INTAKES_SUCCESS:
      return action.intakes;

    case types.DELETE_INTAKE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfIntakeToDelete = state.findIndex(intake => {
        return intake.id === action.intake.id;
      });
      newState.splice(indexOfIntakeToDelete, 1);
      browserHistory.push('/intakes');
      return newState;
    }

    default:
      return state;
  }
};
