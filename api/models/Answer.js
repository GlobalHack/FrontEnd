var faker = require('faker');
var schema = require('../schemas/Answer');

var attributes = {};
attributes = Object.assign(schema, attributes);

var createAnswer = function (intake, question) {
  return {
    answer: faker.random.word(),
    intake: intake,
    question: question
  }
}

var seedData = []
for (var i = 0; i < 45; i++) {
  seedData.push(createAnswer(1,i));
  seedData.push(createAnswer(2,i));
  seedData.push(createAnswer(3,i));
}

module.exports = {
  tableName: 'answer',
  meta: {
    schemaName: 'customer_information'
  },
  attributes: attributes,
  seedData: seedData
};
