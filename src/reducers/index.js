import {combineReducers} from 'redux';
import employees from './employeeReducer';
import consumers from './consumerReducer';
import intakes from './intakeReducer';
import organizations from './organizationReducer';
import messages from './messageReducer';
import notifications from './notificationReducer';
import tasks from './taskReducer';
import {questionSetSchemaReducer as questionSetFormSchema} from './questionSetReducer';

const rootReducer = combineReducers({
  employees,
  consumers,
  intakes,
  organizations,
  messages,
  notifications,
  tasks,
  questionSetFormSchema
});

export default rootReducer;
