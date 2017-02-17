"use strict";

module.exports = {

  format: function (date) {
    var org = new Date(date);
    var local = new Date(date);
    local.setMinutes(org.getMinutes() - org.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  },
  formatNoTZ: function (date) {
    var org = new Date(date);
    return org.toJSON().slice(0, 10);
  },
  calculateAge: function (dateString) { // birthday is a date
    var birthday = +new Date(dateString);
    return~~ ((Date.now() - birthday) / (31557600000));
  }
};
