var mongoose = require('mongoose');

var servicesSchema = new mongoose.Schema({
  name: String
});

var Services = mongoose.model('Services', servicesSchema);
module.exports = Services;