var faker = require('faker');
var schema = require('../schemas/QuestionSet');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createQuestionSet = function () {
  return {
    organization: faker.random.number({min: 1, max: 20}),
    title: faker.random.words()
  }
}

var seedData = []
for (var i = 0; i < 5; i++) {
  seedData.push(createQuestionSet());
}

module.exports = {

  tableName: 'question_set',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: attributes,
  seedData: seedData
};
