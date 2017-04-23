export default {
  employees: [],
  organizations: [],
  consumers: [],
  consumer: {},
  messages: [],
  notifications: [],
  tasks: [],
  intakes: [],
  intake: {},
  intakeQuestionnaire: {},
  questionSetFormSchema: {
    schema: {
      type: 'object',
      properties: []
    }, form: []
  },
  session: !!localStorage.jwt
};
