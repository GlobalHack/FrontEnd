import intakesApi from '../api/IntakeApi';
import * as types from './actionTypes';

export function loadIntakesSuccess(employees) {
  return {type: types.LOAD_INTAKES_SUCCESS, employees};
}

export function updateIntakeSuccess(employee) {
  return {type: types.UPDATE_INTAKE_SUCCESS, employee};
}

export function createIntakeSuccess(employee) {
  return {type: types.CREATE_INTAKE_SUCCESS, employee};
}

export function deleteIntakeSuccess(employee) {
  return {type: types.DELETE_INTAKE_SUCCESS, employee};
}

export function loadIntakes() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return intakesApi.getAllIntakes().then(intakes => {
      dispatch(loadIntakesSuccess(intakes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateIntake(intake) {
  return function (dispatch) {
    return intakesApi.updateIntake(intake).then(responseIntake => {
      dispatch(updateIntakeSuccess(responseIntake));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createIntake(intake) {
  return function (dispatch) {
    return intakesApi.createIntake(intake).then(responseIntake => {
      dispatch(createIntakeSuccess(responseIntake));
      return responseEmployee;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteIntake(intake) {
  return function (dispatch) {
    return intakesApi.deleteIntake(intake).then(() => {
      console.log(`Deleted ${intake.id}`);
      dispatch(deleteIntakeSuccess(intake));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
