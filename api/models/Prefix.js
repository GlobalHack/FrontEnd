var schema = require('../schemas/Prefix');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createPrefix = function (prefix, key) {
  return {
    prefix: prefix,
    key: key
  }
}

var seedData = [
  createPrefix('Do you have now, have you ever had, or has a healthcare provider ever told you that you have any of the following medical conditions:', 'Wellness')
]

module.exports = {
  tableName: 'prefix',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: attributes,
  seedData: seedData
};
