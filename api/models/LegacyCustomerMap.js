module.exports = {

  tableName: 'legacy_customer_map',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
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
