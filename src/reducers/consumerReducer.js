import * as types from '../actions/actionTypes';

export function consumerReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_CONSUMER_SUCCESS:
      return action.payload;
    case types.CREATE_CONSUMER_SUCCESS:
      return action.payload;
    case types.UPDATE_CONSUMER_SUCCESS:
      return [
        ...state.filter(consumer => consumer.id !== action.payload.id),
        Object.assign({}, action.payload),
      ];

    case types.DELETE_CONSUMER_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfConsumerToDelete = state.findIndex(consumer => consumer.id === action.payload.id);
      newState.splice(indexOfConsumerToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
}
