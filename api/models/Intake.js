var schema = require('../schemas/Intake');
Object.keys(schema).forEach(function(schemaKey){
    delete schema[ schemaKey ].title;
});

var attributes = {
    /* RELATIONSHIPS FOR DB HERE - DB STRUCTURE IS IN SCHEMA --- */
    customer: {
        model: 'customer',
        unique: true
    },
    employee: {
        model: 'employee',
        unique: true
    }
};
attributes = Object.assign(schema, attributes);

module.exports = {
  tableName: 'intake',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: attributes,
};
