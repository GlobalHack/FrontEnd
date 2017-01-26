var schema = require('../schemas/CoordinatedEntryGroup');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'coordinated_entry_group',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: attributes
};
