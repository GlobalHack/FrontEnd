var uuid = require('uuid');
var faker = require('faker');
var ssn = require('ssn');
var RandomSSN = ssn.RandomSSN;
var ParseSSN = ssn.ParseSSN;
var schema = require('../schemas/Customer');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createCustomer = function () {
  return {
    uuid: uuid.v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: new RandomSSN().value().toFormattedString(),
    domesticViolence: faker.random.number(1),
    youth: faker.random.number(1),
    dateOfBirth: faker.date.past()
  }
}

var seedData = [];
for (var i = 0; i < 20; i++) {
  seedData.push(createCustomer());
}

module.exports = {
  tableName: 'customer',
  meta: {
    schemaName: 'customer_information'
  },
  attributes: attributes,
  seedData: seedData
};
