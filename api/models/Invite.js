var attributes = {
  organization: {
    model: 'organization'
  },
  inviter: {
    model: 'employee'
  },
  invitee: {
    model: 'employee'
  },
};

module.exports = {
  tableName: 'invite',
  meta: {
    schemaName: 'organization_information'
  },
  attributes: attributes
};
