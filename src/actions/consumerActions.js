import consumerApi from '../api/ConsumerApi';
import * as types from './actionTypes';

export function loadConsumerSuccess(consumer) {
  return {type: types.LOAD_CONSUMER_SUCCESS, consumer};
}

export function loadConsumersSuccess(consumers) {
  return {type: types.LOAD_CONSUMERS_SUCCESS, consumers};
}

export function updateConsumerSuccess(consumer) {
  return {type: types.UPDATE_CONSUMER_SUCCESS, consumer};
}

export function createConsumerSuccess(consumer) {
  return {type: types.CREATE_CONSUMER_SUCCESS, consumer};
}

export function deleteConsumerSuccess(consumer) {
  return {type: types.DELETE_CONSUMER_SUCCESS, consumer};
}

export function loadConsumer(id) {
  return function (dispatch) {
    return consumerApi.getConsumer(id).then(consumer => {
      dispatch(loadConsumerSuccess(consumer));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadConsumers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return consumerApi.getAllConsumers().then(consumers => {
      dispatch(loadConsumersSuccess(consumers));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateConsumer(consumer) {
  return function (dispatch) {
    return consumerApi.updateConsumer(consumer).then(responseConsumer => {
      dispatch(updateConsumerSuccess(responseConsumer));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createConsumer(consumer) {
  return function (dispatch) {
    return consumerApi.createConsumer(consumer).then(responseConsumer => {
      dispatch(createConsumerSuccess(responseConsumer));
      return responseConsumer;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteConsumer(consumer) {
  return function (dispatch) {
    return consumerApi.deleteConsumer(consumer).then(() => {
      console.info(`Deleted ${consumer.id}`);
      dispatch(deleteConsumerSuccess(consumer));

    }).catch(error => {
      throw(error);
    });
  };
}
