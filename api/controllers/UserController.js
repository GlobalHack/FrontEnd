/**
 * CustomerController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
      var query = User.findOne({id:req.params.id})

      if(req.method == "GET"){

        query.exec(function(err, user){
          if(err)
            return res.serverError(err);

          if(!user)
            return res.notFound();

          return res.json(200, {role: user.role});
        });

      }else if(req.method == "POST"){

        query.exec(function(err, user){
          if(err)
            return res.serverError(err);

          if(!user)
            return res.notFound();

          return res.json(200, user.toJSON());
        });

      }
    }
};
