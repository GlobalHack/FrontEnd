var faker = require('faker');
var schema = require('../schemas/Employee');
var RandomSSN = require('ssn').RandomSSN;
var bcrypt = require('bcryptjs');

var attributes = {
}
attributes = Object.assign(schema, attributes);

var createEmployee = function (employee) {
  var lastName = faker.name.lastName()
  var firstName = faker.name.firstName()
  return {
    organization: faker.random.number({min: 1, max: 2}),
    firstName: firstName,
    lastName: lastName,
    nickname: firstName,
    email:  lastName + "." + firstName + "@gmail.com",
    role: faker.random.number({min: 1, max: 2}),
    disabled: false,
    email_verified: false
  }
}

var seedData = []
for (var i = 0; i < 5; i++) {
  seedData.push(createEmployee());
}
seedData.push({email:"test@cemaritan.com",password:bcrypt.hashSync("testing123testing", 10)})


// not sure what this model is for
module.exports = {
  tableName: 'employee',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
