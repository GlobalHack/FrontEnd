/**
 * @module Role
 *
 * @description
 *   Roles endow Users with Permissions. Exposes Postgres-like API for
 *   resolving granted Permissions for a User.
 *
 * @see <http://www.postgresql.org/docs/9.3/static/sql-grant.html>
 */

var schema = require('../schemas/Role');

var attributes = {};
attributes = Object.assign(schema, attributes);

module.exports = {
  autoCreatedBy: false,

  description: 'Confers `Permission` to `User`',

  meta: {
    schemaName: 'organization_information'
  },

  attributes: attributes,
};
