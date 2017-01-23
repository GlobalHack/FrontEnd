/**
 * Home.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'sqlitedb',
  attributes: {
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
    stories: {
        type:'string'
    },
    bedrooms: {
        type:'string'
    },
    bathrooms: {
        type:'string'
    },
    sqft: {
        type:'string'
    },
    ac: {
        type:'array'
    },
    heat: {
        type:'array'
    },
    rooms: {
        type: 'json'
    },
    customer: {
        model: 'Customer'
    }
  }
};

