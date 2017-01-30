var faker = require('faker');
var schema = require('../schemas/GroupMembership');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createGroupMembership = function () {
  return {
    organization: faker.random.number({min: 1, max: 20}),
    coordinated_entry_group: faker.random.number({min: 1, max: 5})
  }
}

var seedData = []
for (var i = 0; i < 5; i++) {
  seedData.push(createGroupMembership());
}

module.exports = {
  tableName: 'group_membership',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
