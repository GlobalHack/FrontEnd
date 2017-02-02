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

var createIntake = function (customer, employee) {
  return {
    customer: customer,
    employee: employee
  }
}

var intakeCount = 3;
var seedData = []
for (var i = 0; i < intakeCount; i++) {
  seedData.push(createIntake(intakeCount-i,i));
}

module.exports = {
  tableName: 'intake',
  meta: {
     schemaName: 'customer_information'
  },
  attributes: attributes,
  seedData: seedData
};
