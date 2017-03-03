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

    disabled: function (req, res) {


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

            res.json(200, user.toJSON());
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
        return res.notFound()
      }
    }

};
