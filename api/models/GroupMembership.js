var schema = require('../schemas/GroupMembership');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'group_membership',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes
};
