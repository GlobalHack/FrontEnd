module.exports = {
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
    default: function () {
      return {}
    }
  }
};
