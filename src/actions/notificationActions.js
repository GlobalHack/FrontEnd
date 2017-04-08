import notificationApi from '../api/NotificationsApi';
import * as types from './actionTypes';

export function loadEmployeesSuccess(notifications) {
  return {type: types.LOAD_NOTIFICATIONS_SUCCESS, notifications};
}

export function updateEmployeeSuccess(notification) {
  return {type: types.UPDATE_NOTIFICATION_SUCCESS, notification};
}

export function createEmployeeSuccess(notification) {
  return {type: types.CREATE_NOTIFICATION_SUCCESS, notification};
}

export function deleteEmployeeSuccess(notification) {
  return {type: types.DELETE_NOTIFICATION_SUCCESS, notification};
}

export function loadNotifications() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function (dispatch) {
    return notificationApi.getAllNotifications().then(notifications => {
      dispatch(loadNotificationsSuccess(notifications));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateNotification(notification) {
  return function (dispatch) {
    return notificationApi.updateNotification(notification).then(responseNotification => {
      dispatch(updateNotificationSuccess(responseNotification));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNotification(notification) {
  return function (dispatch) {
    return notificationApi.createNotification(notification).then(responseNotification => {
      dispatch(createNotificationSuccess(responseNotification));
      return responseNotification;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteEmployee(notification) {
  return function (dispatch) {
    return notificationApi.deleteNotification(notification).then(() => {
      console.log(`Deleted ${notification.id}`);
      dispatch(deleteNotificationSuccess(notification));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
