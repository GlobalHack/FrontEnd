export default {
  employees            : [],
  organizations        : [],
  consumers            : [],
  messages             : [],
  notifications        : [],
  tasks                : [],
  intakes              : [],
  questionSetFormSchema: {
    schema : {
      type      : 'object',
      properties: []
    }, form: []
  },
  session              : !!localStorage.jwt
};
