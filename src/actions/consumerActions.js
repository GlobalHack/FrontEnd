import consumerApi from '../api/ConsumerApi';
import * as types from './actionTypes';
import actionCall from './actionBase';

export const loadConsumer = actionCall(types.LOAD_CONSUMER_SUCCESS, consumerApi.getConsumer);
export const loadConsumers = actionCall(types.LOAD_CONSUMERS_SUCCESS, consumerApi.getAllConsumers);
export const updateConsumer = actionCall(types.UPDATE_CONSUMER_SUCCESS, consumerApi.updateConsumer);
export const createConsumer = actionCall(types.CREATE_CONSUMER_SUCCESS, consumerApi.createConsumer);
export const deleteConsumer = actionCall(types.DELETE_CONSUMER_SUCCESS, consumerApi.deleteConsumer);
