module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'intake',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: {
    customer: {
      model: 'customer',
      unique: true
    },
    employee: {
      model: 'employee',
      unique: true
    },
    created: {
      type: 'datetime',
      defaultsTo: function(){
        return new Date();
      }
    }
  }
};
