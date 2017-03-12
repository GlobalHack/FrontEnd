/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
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

      var query = Employee.findOne({id:req.params.id});

      if(req.method == "POST"){
        var role = parseInt(req.body.role);
        if(!role)
          return res.badRequest("Invalid value: " + req.body.role)

        query.exec(function(err, employee){
          if(err)
            return res.serverError(err);

          if(!employee)
            return res.notFound();
          employee.role = role;
          employee.save(function(err){
            if (err)
              return res.serverError(err);

            return res.json(200, employee.toJSON());
          });
        });

      }else if(req.method == "GET"){

        query.exec(function(err, employee){
          if(err)
            return res.serverError(err);

          if(!employee)
            return res.notFound();

          return res.json(200, {role: employee.role});
        });
      }else{
        return res.badRequest("Method: " + req.method + " not supported.");
      }
    },
    disabled: function (req, res) {
      if (!validation.isRequestAuthorized(req))
        return res.forbidden();

      var query = Employee.findOne({id:req.params.id})

      if ( req.method == "POST") {
        var { disabled } = req.body;

        query.exec(function(err, employee){
          if(err)
            return res.serverError(err);

          if(!employee)
            return res.notFound();

          employee.disabled = disabled == "true" ? true : false;

          employee.save(function(err){
            if(err){
              return res.serverError()
            }

            return res.json(200, employee.toJSON());
          });
        });
      }
      else if (req.method == "GET") {
        query.exec(function(err, employee){
          if(err)
            return res.serverError(err)

          if(!employee)
            return res.notFound()

          return res.json(200, {"disabled":employee.disabled})
        });
      }
      else {
        return res.badRequest("Method: " + req.method + " not supported.");
      }
    }
};
