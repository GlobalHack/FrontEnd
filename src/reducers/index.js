import {combineReducers} from 'redux';
import employees from './employeeReducer';
import consumers from './consumerReducer';
import organizations from './organizationReducer';
import messages from './messageReducer';
import notifications from './notificationReducer';
import tasks from './taskReducer';

const rootReducer = combineReducers({
  employees,
  consumers,
  organizations,
  messages,
  notifications,
  tasks
});

export default rootReducer;
