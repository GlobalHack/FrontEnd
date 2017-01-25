module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'organization',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: {
    name: {
      type: 'text'
    },
    address: {
      type: 'text'
    }
  }
};
