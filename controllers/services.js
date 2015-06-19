/**
 * GET /services
 * List all books.
 */
var Services = require('../models/Services.js');

exports.getServices = function(req, res) {
  Services.find(function(err, docs) {
    res.render('partials/services', { services: docs });
  });
};