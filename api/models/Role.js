var schema = require('../schemas/Role');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createRole = function (organization, accessLevel, title) {
  return {
    organization: organization,
    accessLevel: accessLevel,
    title: title
  }
}

var seedData = []
for (var i = 0; i < 20; i++) {
  seedData.push(createRole(i,3,'Full Access'));
  seedData.push(createRole(i,2,'Partial Access'));
  seedData.push(createRole(i,1,'Limited Access'));
  seedData.push(createRole(i,0,'Write Only'));
}

module.exports = {
  tableName: 'role',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
