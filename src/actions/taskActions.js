import taskApi from '../api/TaskApi';
import * as types from './actionTypes';

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function updateTaskSuccess(task) {
  return {type: types.UPDATE_TASK_SUCCESS, task};
}

export function createTaskSuccess(task) {
  return {type: types.CREATE_TASK_SUCCESS, task};
}

export function deleteTaskSuccess(task) {
  return {type: types.DELETE_TASK_SUCCESS, task};
}

export function loadTasks() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return taskApi.getAllTasks().then(tasks => {
      dispatch(loadTasksSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateTask(task) {
  return function (dispatch) {
    return taskApi.updateTask(task).then(responseTask => {
      dispatch(updateTaskSuccess(responseTask));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createTask(task) {
  return function (dispatch) {
    return taskApi.createTask(task).then(responseTask => {
      dispatch(createTaskSuccess(responseTask));
      return responseTask;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTask(task) {
  return function (dispatch) {
    return taskApi.deleteTask(task).then(() => {
      console.info(`Deleted ${task.id}`);
      dispatch(deleteTaskSuccess(task));

    }).catch(error => {
      throw(error);
    });
  };
}
