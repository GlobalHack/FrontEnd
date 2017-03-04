module.exports = {
  organization: {
    model: 'organization'
  },
  firstName: {
    type: 'string',
    size: 64,
    columnName: 'first_name'
  },
  lastName: {
    type: 'string',
    size: 64,
    columnName: 'last_name'
  },
  email: {
    type: 'string'
  },
  role: {
    model: 'role'
  },
  disabled: {
    type: 'boolean',
    defaultsTo: false
  }
};
