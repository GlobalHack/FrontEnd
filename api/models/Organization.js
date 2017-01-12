module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'organization',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: {
    id: {
      type: 'integer',
      autoincrement: true,
      unique: true
    },
    name: {
      type: 'text'
    },
    address: {
      type: 'text'
    }
  }
};
