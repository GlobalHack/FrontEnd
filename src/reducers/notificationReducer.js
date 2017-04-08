import {browserHistory} from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function notificationReducer(state = initialState.notifications, action) {
  switch (action.type) {

    case types.LOAD_NOTIFICATIONS_SUCCESS:
      return action.notifications;
    case types.CREATE_NOTIFICATION_SUCCESS:
      browserHistory.push(`/notifications/${action.notification.id}`);
      return [
        ...state.filter(notification => notification.id !== action.notification.id),
        Object.assign({}, action.notification)
      ];

    case types.UPDATE_NOTIFICATION_SUCCESS:
      return [
        ...state.filter(notification => notification.id !== action.notification.id),
        Object.assign({}, action.notification)
      ];

    case types.DELETE_NOTIFICATION_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfNotificationToDelete = state.findIndex(notification => {
        return notification.id == action.notification.id;
      });
      newState.splice(indexOfNotificationToDelete, 1);
      browserHistory.push('/notifications');
      return newState;
    }

    default:
      return state;
  }
};
