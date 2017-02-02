var uuid = require('uuid');
var faker = require('faker');
var schema = require('../schemas/LegacyCustomerMap');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createLegacyCustomerMap = function () {
  return {
    organization: faker.random.number({min: 1, max: 20}),
    customer: faker.random.number({min: 1, max: 20}),
    legacy_uuid: uuid.v4()
  }
}

var seedData = []
for (var i = 0; i < 5; i++) {
  seedData.push(createLegacyCustomerMap());
}

module.exports = {
  tableName: 'legacy_customer_map',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
