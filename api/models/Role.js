module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'role',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
    id: {
      type: 'integer',
      autoincrement: true,
      unique: true
    },
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
