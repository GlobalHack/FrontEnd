module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'legacy_customer_map',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
    // id: {
    //   type: 'integer',
    //   autoincrement: true,
    //   unique: true
    // },
    organization: {
      model: 'organization',
      unique: true
    },
    customer: {
      model: 'customer',
      unique: true
    },
    legacy_uuid: {
      type: 'string'
    }
  }
};
