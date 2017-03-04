var attributes = {
  organization: {
    model: 'organization'
  },
  inviter: {
    model: 'user'
  },
  invitee: {
    model: 'user'
  },
};

module.exports = {
  tableName: 'invite',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes
};
