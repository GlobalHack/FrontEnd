import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {

    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.CREATE_TASK_SUCCESS:
      browserHistory.push(`/tasks/${action.task.id}`);
      return [
        ...state.filter(task => task.id !== action.task.id),
        Object.assign({}, action.task)
      ];

    case types.UPDATE_TASK_SUCCESS:
      return [
        ...state.filter(task => task.id !== action.task.id),
        Object.assign({}, action.task)
      ];

    case types.DELETE_TASK_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfTaskToDelete = state.findIndex(task => {
        return task.id === action.task.id;
      });
      newState.splice(indexOfTaskToDelete, 1);
      browserHistory.push('/tasks');
      return newState;
    }

    default:
      return state;
  }
};
