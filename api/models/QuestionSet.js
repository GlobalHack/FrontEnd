var schema = require('../schemas/QuestionSet');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {

  tableName: 'question_set',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: attributes
};
