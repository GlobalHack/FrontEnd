module.exports = {
  organization: {
    model: 'organization'
  },
  title: {
    type: 'text',
    required: true
  },
  questions: {
    type: 'json',
    default: function () {
      return {}
    }
  }
};
