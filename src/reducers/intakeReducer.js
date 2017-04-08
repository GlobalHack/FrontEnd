import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function intakeReducer(state = initialState.intakes, action) {
  switch (action.type) {

    case types.LOAD_INTAKES_SUCCESS:
      return action.intakes;
    case types.CREATE_INTAKE_SUCCESS:
      browserHistory.push(`/intakes/${action.intake.id}`);
      return [
        ...state.filter(intake => intake.id !== action.intake.id),
        Object.assign({}, action.intake)
      ];

    case types.UPDATE_INTAKE_SUCCESS:
      return [
        ...state.filter(intake => intake.id !== action.intake.id),
        Object.assign({}, action.intake)
      ];

    case types.DELETE_INTAKE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfIntakeToDelete = state.findIndex(intake => {
        return intake.id == action.intake.id;
      });
      newState.splice(indexOfIntakeToDelete, 1);
      browserHistory.push('/intakes');
      return newState;
    }

    default:
      return state;
  }
};
