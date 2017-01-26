var schema = require('../schemas/User');

var attributes = {};
attributes = Object.assign(schema, attributes);
// not sure what this model is for
module.exports = {
  tableName: 'user',
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: attributes
};
