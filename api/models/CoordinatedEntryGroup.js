var faker = require('faker');
var schema = require('../schemas/CoordinatedEntryGroup');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createCoordinatedEntryGroup = function (lead_organization, name) {
  return {
    lead_organization: lead_organization?lead_organization:faker.random.number({min: 1, max: 20}),
    name: name?name:faker.random.words(),
    access_level: faker.random.number({min: 1, max: 4})
  }
}

var seedData = []
for (var i = 0; i < 8; i++) {
  seedData.push(createCoordinatedEntryGroup(i, "CEG"+i));
}

module.exports = {
  tableName: 'coordinated_entry_group',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
