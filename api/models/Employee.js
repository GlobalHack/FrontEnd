var faker = require('faker');
var RandomSSN = require('ssn').RandomSSN;
var schema = require('../schemas/Employee');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createEmployee = function () {
  return {
    organization: faker.random.number({min: 1, max: 2}),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: new RandomSSN().value().toFormattedString(),
    role: faker.random.number({min: 1, max: 2})
  }
}

var seedData = []
for (var i = 0; i < 20; i++) {
  seedData.push(createEmployee());
}

module.exports = {
  tableName: 'employee',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
