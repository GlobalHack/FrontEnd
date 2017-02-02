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
  ssn: {
    type: 'string',
    size: 11
  },
  role: {
    model: 'role'
  }
};
