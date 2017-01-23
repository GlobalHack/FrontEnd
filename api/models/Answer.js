module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'answer',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: {
    intake: {
      model: 'intake',
      unique: true
    },
    question: {
      model: 'question',
      unique: true
    },
    answer: {
      type: 'text'
    }
  }
};
