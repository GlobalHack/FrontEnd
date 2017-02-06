var faker = require('faker');
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
    General_1: parseInt(faker.random.number({min: 15, max: 60})),
    Housing_1: parseInt(faker.random.number({min: 15, max: 60})),
    Housing_2: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_1: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_2: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_3: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_4: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_5: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_6: faker.random.number(1),
    Risks_7: faker.random.number(1),
    Risks_8: faker.random.number(1),
    Risks_9: faker.random.number(1),
    Risks_10: faker.random.number(1),
    Risks_11: faker.random.words(),
    Socialization_1: faker.random.number(1),
    Socialization_2: faker.random.number(1),
    Socialization_3: faker.random.number(1),
    Socialization_4: faker.random.number(1),
    Socialization_5: faker.random.number(1),
    Socialization_6: faker.random.number(1),
    Socialization_7: faker.random.number(1),
    Wellness_1: faker.random.words(),
    Wellness_2: faker.random.number(1),
    Wellness_3: faker.random.number(1),
    Wellness_4: faker.random.number(1),
    Wellness_5: faker.random.number(1),
    Wellness_6: faker.random.number(1),
    Wellness_7: faker.random.number(1),
    Wellness_8: faker.random.number(1),
    Wellness_9: faker.random.number(1),
    Wellness_10: faker.random.number(1),
    Wellness_11: faker.random.number(1),
    Wellness_12: faker.random.number(1),
    Wellness_13: faker.random.number(1),
    Wellness_14: faker.random.number(1),
    Wellness_15: faker.random.number(1),
    Wellness_16: faker.random.number(1),
    Wellness_17: faker.random.number(1),
    Wellness_18: faker.random.number(1),
    Wellness_19: faker.random.number(1),
    Wellness_20: faker.random.number(1),
    Wellness_21: faker.random.number(1),
    Wellness_22: faker.random.number(1),
    Wellness_23: faker.random.number(1),
    Wellness_24: faker.random.number(1),
    Wellness_25: faker.random.number(1),
    Wellness_26: faker.random.number(1),
    Wellness_27: faker.random.number(1),
    Wellness_28: faker.random.number(1),
    Wellness_29: faker.random.number(1),
    Wellness_30: faker.random.number(1),
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
