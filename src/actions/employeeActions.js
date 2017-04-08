import employeeApi from '../api/EmployeeApi';
import * as types from './actionTypes';

export function loadEmployeesSuccess(employees) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function updateEmployeeSuccess(employee) {
  return {type: types.UPDATE_EMPLOYEE_SUCCESS, employee};
}

export function createEmployeeSuccess(employee) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function deleteEmployeeSuccess(employee) {
  return {type: types.DELETE_EMPLOYEE_SUCCESS, employee};
}

export function loadEmployees() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return employeeApi.getAllEmployees().then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateEmployee(employee) {
  return function (dispatch) {
    return employeeApi.updateEmployee(employee).then(responseEmployee => {
      dispatch(updateEmployeeSuccess(responseEmployee));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createEmployee(employee) {
  return function (dispatch) {
    return employeeApi.createEmployee(employee).then(responseEmployee => {
      dispatch(createEmployeeSuccess(responseEmployee));
      return responseEmployee;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteEmployee(employee) {
  return function (dispatch) {
    return employeeApi.deleteEmployee(employee).then(() => {
      console.log(`Deleted ${employee.id}`);
      dispatch(deleteEmployeeSuccess(employee));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
