import messageApi from '../api/MessageApi';
import * as types from './actionTypes';

export function loadMessagesSuccess(messages) {
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function updateMessageSuccess(message) {
  return {type: types.UPDATE_MESSAGES_SUCCESS, message};
}

export function createMessageSuccess(message) {
  return {type: types.CREATE_MESSAGES_SUCCESS, message};
}

export function deleteMessageSuccess(message) {
  return {type: types.DELETE_MESSAGES_SUCCESS, message};
}

export function loadMessages() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return messageApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateMessage(message) {
  return function (dispatch) {
    return messageApi.updateMessage(message).then(responseMessage => {
      dispatch(updateMessageSuccess(responseMessage));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createEmployee(message) {
  return function (dispatch) {
    return messageApi.createMessage(message).then(responseMessage => {
      dispatch(createMessageSuccess(responseMessage));
      return responseMessage;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteMessage(message) {
  return function (dispatch) {
    return messageApi.deleteMessage(message).then(() => {
      console.info(`Deleted ${message.id}`);
      dispatch(deleteMessageSuccess(message));

    }).catch(error => {
      throw(error);
    });
  };
}
