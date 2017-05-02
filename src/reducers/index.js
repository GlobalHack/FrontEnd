import {combineReducers} from 'redux';
import consumers, {consumerReducer as consumer} from './consumerReducer';
import employees, {employeeReducer as employee} from './employeeReducer';
import intakes, {intakeQuestionnaireReducer as intakeQuestionnaire, intakeReducer as intake} from './intakeReducer';
import messages from './messageReducer';
import notifications from './notificationReducer';
import organizations, {organizationReducer as organization} from './organizationReducer';
import {questionSetSchemaReducer as questionSetFormSchema} from './questionSetReducer';
import tasks from './taskReducer';

const rootReducer = combineReducers({
  employees,
  employee,
  consumers,
  consumer,
  intakes,
  intake,
  intakeQuestionnaire,
  organizations,
  organization,
  messages,
  notifications,
  tasks,
  questionSetFormSchema
});

export default rootReducer;
