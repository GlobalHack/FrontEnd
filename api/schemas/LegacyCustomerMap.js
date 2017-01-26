module.exports = {
  organization: {
    model: 'organization',
    unique: true
  },
  customer: {
    model: 'customer',
    unique: true
  },
  legacy_uuid: {
    type: 'string'
  }
};
