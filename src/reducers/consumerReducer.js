import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import {consumerPath} from '../api/apiBase';
import initialState from './initialState';

export function consumerReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_CONSUMER_SUCCESS:
      return action.consumer;
    case types.CREATE_CONSUMER_SUCCESS:
      return action.consumer;
    default:
      return state;
  }
}

export default function consumersReducer(state = initialState.consumers, action) {
  switch (action.type) {

    case types.LOAD_CONSUMERS_SUCCESS:
      return action.consumers;

    case types.UPDATE_CONSUMER_SUCCESS:
      return [
        ...state.filter(consumer => consumer.id !== action.consumer.id),
        Object.assign({}, action.consumer)
      ];

    case types.DELETE_CONSUMER_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfConsumerToDelete = state.findIndex(consumer => {
        return consumer.id === action.consumer.id;
      });
      newState.splice(indexOfConsumerToDelete, 1);
      browserHistory.push(consumerPath);
      return newState;
    }

    default:
      return state;
  }
};
