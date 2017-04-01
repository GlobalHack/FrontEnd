module.exports = {
  name: {
    type: 'string',
    index: true,
    defaultsTo: '',
    notNull: true,
    unique: true
  },
  users: {
    collection: 'User',
    via: 'roles'
  },
  active: {
    type: 'boolean',
    defaultsTo: true,
    index: true
  },
  permissions: {
    collection: 'Permission',
    via: 'role'
  }
};
