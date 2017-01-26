/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var schema = require('../schemas/Customer');

var attributes = {
    homes: {
        collection: 'home',
        via: 'customer'
    }
};

attributes = Object.assign(schema, attributes);

var model = {
    connection: 'sqlitedb',
    attributes: attributes
};

console.log( model );

module.exports = model;