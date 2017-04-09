import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import {customerPath} from '../api/apiBase';
import initialState from './initialState';

export default function customerReducer(state = initialState.consumers, action) {
  switch (action.type) {

    case types.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;

    case types.CREATE_CUSTOMER_SUCCESS:
      browserHistory.push(`${customerPath}${action.customer.id}`);
      return [
        ...state.filter(customer => customer.id !== action.customer.id),
        Object.assign({}, action.customer)
      ];

    case types.UPDATE_CUSTOMER_SUCCESS:
      return [
        ...state.filter(customer => customer.id !== action.customer.id),
        Object.assign({}, action.customer)
      ];

    case types.DELETE_CUSTOMER_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfCustomerToDelete = state.findIndex(customer => {
        return customer.id === action.customer.id;
      });
      newState.splice(indexOfCustomerToDelete, 1);
      browserHistory.push(customerPath);
      return newState;
    }

    default:
      return state;
  }
};
