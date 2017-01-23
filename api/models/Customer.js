var uuid = require('uuid');

module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'customer',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: {
    uuid: {
      type: 'string',
      defaultsTo: function(){
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
      size: 11,
      is: '^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$'
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
      type: date,
      before: function(){
        return new Date();
      },
      columnName: 'date_of_birth'
    },
  }
};
