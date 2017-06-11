import {combineReducers} from 'redux';
import consumers, {consumerReducer as consumer} from './consumerReducer';
import employees, {employeeReducer as employee} from './employeeReducer';
import intakes, {intakeQuestionnaireReducer as intakeQuestionnaire, intakeReducer as intake} from './intakeReducer';
import messages from './messageReducer';
import notifications from './notificationReducer';
import organizations, {organizationReducer as organization} from './organizationReducer';
import {questionSetSchemaReducer as questionSetFormSchema} from './questionSetReducer';
import {questionSetReducer as questionSet} from './questionSetReducer';
import {questionReducer as question} from './questionReducer';
import tasks from './taskReducer';
import users, {userReducer as user} from './userReducer';

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
  users,
  user,
  questionSetFormSchema,
  questionSet,
  question
});

export default rootReducer;
