export default {
  employees            : [],
  organizations        : [],
  consumers            : [],
  messages             : [],
  notifications        : [],
  tasks                : [],
  questionSetFormSchema: {
    schema : {
      type      : 'object',
      properties: []
    }, form: []
  },
  session              : !!localStorage.jwt
};
