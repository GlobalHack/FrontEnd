import messageApi from '../api/MessageApi';
import * as types from './actionTypes';

export const loadMessage = actionCall(
  types.LOAD_MESSAGE_SUCCESS,
  consumerApi.getMessage
);
export const loadMessages = actionCall(
  types.LOAD_MESSAGES_SUCCESS,
  consumerApi.getAllMessages
);
export const updateMessage = actionCall(
  types.UPDATE_MESSAGE_SUCCESS,
  consumerApi.updateMessage
);
export const createMessage = actionCall(
  types.CREATE_MESSAGE_SUCCESS,
  consumerApi.createMessage
);
export const deleteMessage = actionCall(
  types.DELETE_MESSAGE_SUCCESS,
  consumerApi.deleteMessage
);
