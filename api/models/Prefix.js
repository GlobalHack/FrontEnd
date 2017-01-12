module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'prefix',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: {
    organization: {
      model: 'organization',
      unique: true
    },
    prefix: {
      type: 'text'
    },
    key: {
      type: 'string',
      size: 64,
      unique: true
    }
  }
};
