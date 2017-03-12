/**
 * tokenAuth
 *
 * @module      Policies
 * @description Policy that verifies a given JWT token.
 *              If successful, associated user object is stored in req.user for future use.
 * @docs        http://sailsjs.org/#!documentation/policies
 * @see         http://github.com/auth0/express-jwt
 *
 */
var jwt = require('express-jwt');
module.exports = jwt(
  {
    secret: 'm-zNSJsGuZ11Y8MOpgO0Zvdgbj8IzPEmsO9zhDwHab1eKAcmc-2RW46R_Y6lO517',
    audience: 'lY6PHPcT6qeOgVMTuQA57EMxdLDhxtb2',
    issuer: 'https://benvenker.auth0.com/'
  }
);
