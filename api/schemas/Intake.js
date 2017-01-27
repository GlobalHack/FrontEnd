module.exports = {
  customer: {
    model: 'customer',
    unique: true
  },
  employee: {
    model: 'employee',
    unique: true
  },
  created: {
    type: 'datetime',
    defaultsTo: function () {
      return new Date();
    }
  }
};
