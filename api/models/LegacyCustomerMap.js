var schema = require('../schemas/LegacyCustomerMap');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'legacy_customer_map',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: attributes
};
