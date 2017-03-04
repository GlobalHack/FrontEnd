/**
 * CustomerController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var validation = require('../services/validation');

module.exports = {

    view: function (req, res) {
      res.view()
    },

    add: function (req, res) {
      res.view()
    },

    edit: function (req, res) {
      res.view()
    },

    role: function (req, res) {
      if (!validation.isRequestAuthorized(req))
        return res.forbidden();

      var query = User.findOne({id:req.params.id});

      if(req.method == "POST"){
        var role = parseInt(req.body.role);

        query.exec(function(err, user){
          if(err)
            return res.serverError(err);

          if(!user)
            return res.notFound();

          user.save(function(err){
            if (err)
              return res.serverError(err);

            return res.json(200, user.toJSON());
          });
        });

      }else if(req.method == "GET"){

        query.exec(function(err, user){
          if(err)
            return res.serverError(err);

          if(!user)
            return res.notFound();

          return res.json(200, {role: user.role});
        });
      }else{
        return res.badRequest("Method: " + req.method + " not supported.");
      }
    },
    disabled: function (req, res) {
      if (!validation.isRequestAuthorized(req))
        return res.forbidden();

      var query = User.findOne({id:req.params.id})

      if ( req.method == "POST") {
        var { disabled } = req.body;

        query.exec(function(err, user){
          if(err)
            return res.serverError(err);

          if(!user)
            return res.notFound();

          user.disabled = disabled == "true" ? true : false;

          user.save(function(err){
            if(err){
              return res.serverError()
            }

            return res.json(200, user.toJSON());
          });
        });
      }
      else if (req.method == "GET") {
        query.exec(function(err, user){
          if(err)
            return res.serverError(err)

          if(!user)
            return res.notFound()

          return res.json(200, {"disabled":user.disabled})
        });
      }
      else {
        return res.badRequest("Method: " + req.method + " not supported.");
      }
    }
};
