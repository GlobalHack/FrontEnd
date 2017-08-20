import employeeApi from '../api/EmployeeApi';
import * as types from './actionTypes';
import actionCall from './actionBase';

export const loadEmployee = actionCall(
  types.LOAD_EMPLOYEES_SUCCESS,
  employeeApi.getEmployee
);
export const loadEmployees = actionCall(
  types.LOAD_EMPLOYEESS_SUCCESS,
  employeeApi.getAllEmployees
);
export const updateEmployee = actionCall(
  types.UPDATE_EMPLOYEES_SUCCESS,
  employeeApi.updateEmployee
);
export const createEmployee = actionCall(
  types.CREATE_EMPLOYEES_SUCCESS,
  employeeApi.createEmployee
);
export const deleteEmployee = actionCall(
  types.DELETE_EMPLOYEES_SUCCESS,
  employeeApi.deleteEmployee
);
