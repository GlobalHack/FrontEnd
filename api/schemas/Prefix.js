module.exports = {
  organization: {
    model: 'organization'
  },
  prefix: {
    type: 'text'
  },
  key: {
    type: 'string',
    size: 64,
    unique: true
  }
};
