var uuid = require('uuid');

module.exports = {
  uuid: {
    type: 'string',
    defaultsTo: function () {
      return uuid.v4();
    },
    unique: true
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
  domesticViolence: {
    type: 'boolean',
    columnName: 'domestic_violence'
  },
  youth: {
    type: 'boolean',
    columnName: 'youth'
  },
  dateOfBirth: {
    type: 'date',
    before: function () {
      return new Date();
    },
    columnName: 'date_of_birth'
  }
};
