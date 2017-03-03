var faker = require('faker');
var schema = require('../schemas/User');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createUser = function (user) {
  return {
    user: user,
    customer: faker.random.number({min: 1, max: 20}),
    disabled: false
  }
}

var seedData = []
for (var i = 0; i < 5; i++) {
  seedData.push(createUser());
}

// not sure what this model is for
module.exports = {
  tableName: 'user',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
