module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'employee',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization',
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
      size: 11
    },
    role: {
      model: 'role',
      unique: true
    }
  }
};
