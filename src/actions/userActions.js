import userApi from '../api/UserApi';
import * as types from './actionTypes';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user };
}

export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}

export function deleteUserSuccess(user) {
  return { type: types.DELETE_USER_SUCCESS, user };
}

export function loadUser(id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return userApi.getUser(id).then((user) => {
      dispatch(loadUsersSuccess(user));
      return user;
    }).catch((error) => {
      throw (error);
    });
  };
}

export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return userApi.getAllUsers().then((users) => {
      dispatch(loadUsersSuccess(users));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return userApi.updateUser(user).then((responseUser) => {
      dispatch(updateUserSuccess(responseUser));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function createUser(user) {
  return function (dispatch) {
    return userApi.createUser(user).then((responseUser) => {
      dispatch(createUserSuccess(responseUser));
      return responseUser;
    }).catch((error) => {
      throw (error);
    });
  };
}

export function deleteUser(user) {
  return function (dispatch) {
    return userApi.deleteUser(user).then(() => {
      console.info(`Deleted ${user.id}`);
      dispatch(deleteUserSuccess(user));
    }).catch((error) => {
      throw (error);
    });
  };
}
