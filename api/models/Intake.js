var faker = require('faker');
var schema = require('../schemas/Intake');

/* CLEAN ANYTHING FROM THE SCHEMA THAT'S FOR THE CLIENT ONLY --- */
schema = format.schema( schema )

var attributes = {
    /* RELATIONSHIPS FOR DB HERE - DB STRUCTURE IS IN SCHEMA --- */
    customer: {
        model: 'customer',
        unique: true
    },
    user: {
        model: 'user',
        unique: true
    },
    score:{
        "type": "integer",
        defaultsTo: 0,
    }
};
attributes = Object.assign(schema, attributes);

var createIntake = function (customer, user) {
  return {
    General_1: parseInt(faker.random.number({min: 15, max: 60})),
    Housing_1: parseInt(faker.random.number({min: 15, max: 60})),
    Housing_2: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_1: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_2: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_3: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_4: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_5: parseInt(faker.random.number({min: 1, max: 7})),
    Risks_6: faker.random.boolean(),
    Risks_7: faker.random.boolean(),
    Risks_8: faker.random.boolean(),
    Risks_9: faker.random.boolean(),
    Risks_10: faker.random.boolean(),
    Risks_11: faker.random.arrayElement(["Shelter", "Street, Sidewalk or Doorway", "Car, Van or RV", "Bus or Subway", "Beach, Riverbed or Park"]),
    Socialization_1: faker.random.boolean(),
    Socialization_2: faker.random.boolean(),
    Socialization_3: faker.random.boolean(),
    Socialization_4: faker.random.boolean(),
    Socialization_5: faker.random.boolean(),
    Socialization_6: faker.random.boolean(),
    Socialization_7: faker.random.boolean(),
    Wellness_1: faker.random.arrayElement(["Hospital", "Clinic", "VA", "Does not go for care"]),
    Wellness_2: faker.random.boolean(),
    Wellness_3: faker.random.boolean(),
    Wellness_4: faker.random.boolean(),
    Wellness_5: faker.random.boolean(),
    Wellness_6: faker.random.boolean(),
    Wellness_7: faker.random.boolean(),
    Wellness_8: faker.random.boolean(),
    Wellness_9: faker.random.boolean(),
    Wellness_10: faker.random.boolean(),
    Wellness_11: faker.random.boolean(),
    Wellness_12: faker.random.boolean(),
    Wellness_13: faker.random.boolean(),
    Wellness_14: faker.random.boolean(),
    Wellness_15: faker.random.boolean(),
    Wellness_16: faker.random.boolean(),
    Wellness_17: faker.random.boolean(),
    Wellness_18: faker.random.boolean(),
    Wellness_19: faker.random.boolean(),
    Wellness_20: faker.random.boolean(),
    Wellness_21: faker.random.boolean(),
    Wellness_22: faker.random.boolean(),
    Wellness_23: faker.random.boolean(),
    Wellness_24: faker.random.boolean(),
    Wellness_25: faker.random.boolean(),
    Wellness_26: faker.random.boolean(),
    Wellness_27: faker.random.boolean(),
    Wellness_28: faker.random.boolean(),
    Wellness_29: faker.random.boolean(),
    Wellness_30: faker.random.boolean(),
    customer: customer,
    user: user,
    complete: faker.random.boolean(),
    score: 0
  }
};

var intakeCount = 6;
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
