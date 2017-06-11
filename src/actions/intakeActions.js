import intakesApi from '../api/IntakeApi';
import * as types from './actionTypes';

export function loadIntakeSuccess(intake) {
  return {type: types.LOAD_INTAKE_SUCCESS, intake};
}

export function loadIntakeQuestionnaireSuccess(intakeQuestionnaire) {
  return {type: types.LOAD_INTAKE_QUESTIONNAIRE_SUCCESS, intakeQuestionnaire};
}

export function loadIntakesSuccess(intakes) {
  return {type: types.LOAD_INTAKES_SUCCESS, intakes};
}

export function updateIntakeSuccess(intake) {
  return {type: types.UPDATE_INTAKE_SUCCESS, intake};
}

export function createIntakeSuccess(intake) {
  return {type: types.CREATE_INTAKE_SUCCESS, intake};
}

export function deleteIntakeSuccess(intake) {
  return {type: types.DELETE_INTAKE_SUCCESS, intake};
}

export function loadIntakeShemaSuccess(schema) {
  return {type: types.LOAD_INTAKE_SCHEMA_SUCCESS, schema};
}

export function loadIntakeSchema() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return intakesApi.getIntakeSchema().then(schema => {
      dispatch(loadIntakeShemaSuccess(schema));
    }).catch(error => {
      throw(error);
    });
  };
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

export function loadIntake(id) {
  return function (dispatch) {
    return intakesApi.getIntake(id).then(intake => {
      dispatch(loadIntakeSuccess(intake));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadIntakeQuestionnaire(id) {
  return function (dispatch) {
    return intakesApi.getIntakeQuestionnaire(id).then(intakeQuestionnaire => {
      dispatch(loadIntakeQuestionnaireSuccess(intakeQuestionnaire));
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
      return responseIntake;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteIntake(intake) {
  return function (dispatch) {
    return intakesApi.deleteIntake(intake).then(() => {
      console.info(`Deleted ${intake.id}`);
      dispatch(deleteIntakeSuccess(intake));

    }).catch(error => {
      throw(error);
    });
  };
}
