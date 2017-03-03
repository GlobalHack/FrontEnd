var faker = require('faker');
var schema = require('../schemas/User');
var RandomSSN = require('ssn').RandomSSN;

var attributes = {
  auth0Id: {
    type: 'integer'
  }
}
attributes = Object.assign(schema, attributes);

var createUser = function (user) {
  return {
    organization: faker.random.number({min: 1, max: 2}),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: new RandomSSN().value().toFormattedString(),
    role: faker.random.number({min: 1, max: 2}),
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
