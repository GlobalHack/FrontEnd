/**
 * IntakeController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var json2csv = require('json2csv');
var moment = require('moment');

module.exports = {
  csv: function (req, res) {
    Intake.find().populate('customer').populate('employee').exec(function (err, list) {
      if (err) console.log(err);
      // Send a CSV response
      var config = {
        data: list
      };

      json2csv(config, function (err, csv) {
        if (err) console.log(err);
        var filename = "report-" + moment().format("YYYY-MM-DD") + ".csv";
        res.attachment(filename);
        res.end(csv, 'UTF-8');
      });
    });
  }
};
