module.exports = {

  connection: 'localPostgreSQLServer',
  tableName: 'question',
  meta: {
     schemaName: 'coordinated_entry_system'
  },
  attributes: {
    id: {
      type: 'integer',
      autoincrement: true,
      unique: true
    },
    organization: {
      model: 'organization',
      unique: true
    },
    question: {
      type: 'text',
      required: true
    },
    accessLevel: {
      type: 'integer',
      default: 1,
      columnName: 'access_level'
    },
    type: {
      type: 'string',
      enum: ['String', 'Number', 'Boolean']
    },
    required: {
      type: 'boolean',
      default: false
    },
    key: {
      type: 'string',
      size: 64,
      unique: true
    },
    prefix_group: {
      type: 'string',
      size: 64
    }
  }
};
