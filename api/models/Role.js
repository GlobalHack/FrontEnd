module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'role',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization',
      unique: true
    },
    accessLevel: {
      type: 'int'
    },
    title: {
      type: 'text',
      required: true
    }
  }
};
