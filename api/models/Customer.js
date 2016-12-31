/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'sqlitedb',
  attributes: {
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'string'
    },
    addressLine1: {
        type: 'string'
    },
    addressLine2: {
        type: 'string'
    },
    city: {
        type: 'string'
    },
    state: {
        type: 'string'
    },
    zipcode: {
        type: 'string'
    },
    performance: {
        type: 'array'
    },
    design: {
        type: 'array'
    },
    outdoor: {
        type: 'array'
    },
    homes: {
        collection: 'home',
        via: 'customer'
    }
  }
};

