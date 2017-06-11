import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import {employeePath} from '../api/apiBase';
import initialState from './initialState';

export function employeeReducer(state = initialState.employee, action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_SUCCESS:
      return action.employee;
    default:
      return state;
  }
}

export default function employeesReducer(state = initialState.employees, action) {
  switch (action.type) {

    case types.LOAD_EMPLOYEES_SUCCESS:
      return action.employees;
    case types.CREATE_EMPLOYEE_SUCCESS:
      browserHistory.push(`${employeePath}${action.employee.id}`);
      return [
        ...state.filter(employee => employee.id !== action.employee.id),
        Object.assign({}, action.employee)
      ];

    case types.UPDATE_EMPLOYEE_SUCCESS:
      return [
        ...state.filter(employee => employee.id !== action.employee.id),
        Object.assign({}, action.employee)
      ];

    case types.DELETE_EMPLOYEE_SUCCESS: {
      const newState                = Object.assign([], state);
      const indexOfEmployeeToDelete = state.findIndex(employee => {
        return employee.id === action.employee.id;
      });
      newState.splice(indexOfEmployeeToDelete, 1);
      browserHistory.push(employeePath);
      return newState;
    }

    default:
      return state;
  }
};
