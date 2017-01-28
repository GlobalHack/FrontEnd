var schema = require('../schemas/Intake');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'intake',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: attributes
};
