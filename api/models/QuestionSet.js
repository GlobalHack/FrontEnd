module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'question_set',
  meta: {
     schemaName: 'organization_information'
  },
  attributes: {
    // id: {
    //   type: 'integer',
    //   autoincrement: true,
    //   unique: true
    // },
    organization: {
      model: 'organization',
      unique: true
    },
    title: {
      type: 'text',
      required: true
    },
    questions: {
      type: 'json',
      default: function(){
        return {}
      }
    }
  }
};
