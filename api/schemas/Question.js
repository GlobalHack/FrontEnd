module.exports = {
  organization: {
    model: 'organization'
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
};
