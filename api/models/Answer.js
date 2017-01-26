var schema = require('../schemas/Answer');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'answer',
  meta: {
    schemaName: 'customer_information'
  },
  attributes: attributes
};
