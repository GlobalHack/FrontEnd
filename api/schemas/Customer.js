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
    columnName: 'first_name',
    title:'First Name',
    required: true
  },
  lastName: {
    type: 'string',
    size: 64,
    columnName: 'last_name',
    title:'Last Name',
    required: true
  },
  ssn: {
    type: 'string',
    size: 11,
    title:'SSN',
    required: true
  },
  domesticViolence: {
    type: 'boolean',
    columnName: 'domestic_violence',
    title:'Domestic Violence'
  },
  youth: {
    type: 'boolean',
    columnName: 'youth',
    title:'Youth'
  },
  dateOfBirth: {
    type: 'date',
    before: new Date(),
    columnName: 'date_of_birth',
    title:'Date of Birth',
    required:true
  }
};
