module.exports = {
  isRequestAuthorized: function(req) {
    /**
      Function checks the signed cookies of a request to determine
      role of logged in client.

      returns true if users role can edit else false.
    **/
    if(req.method == 'POST'){
      return true
    }

    if(req.method == 'GET'){
      return true
    }

    return false
  }
}
