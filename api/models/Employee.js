var faker = require('faker');
var RandomSSN = require('ssn').RandomSSN;
var bcrypt = require('bcryptjs');
var schema = require('../schemas/Employee');

var attributes = {
  nickname: {
    type: 'string'
  },
  password: {
    type: 'string'
  },
  email_Verified: {
    type: 'boolean'
  },
};
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
seedData.push({email:"test@cemaritan.com",password:bcrypt.hashSync("testing123testing", 10)});

module.exports = {
  tableName: 'employee',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
