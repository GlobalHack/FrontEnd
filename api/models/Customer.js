var uuid = require('uuid');

module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'customer',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: {
    id: {
      type: 'integer',
      autoincrement: true
    },
    uuid: {
      type: 'string',
      defaultsTo: function(){
        return uuid.v4();
      }
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
    age: {
      type: 'integer'
    }
  }
};
