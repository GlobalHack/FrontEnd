module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'coordinated_entry_group',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: {
    lead_organization: {
      model: 'organization'
    },
    name: {
      type: 'text'
    },
    access_level: {
      type: 'integer'
    }
  }
};
