var faker = require('faker');
var schema = require('../schemas/Organization');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createOrganization = function () {
  return {
    name: faker.random.words(),
    address: faker.address.streetAddress(),
  }
}

var seedData = []
for (var i = 0; i < 20; i++) {
  seedData.push(createOrganization());
}

module.exports = {
  tableName: 'organization',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
