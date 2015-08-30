var mongoose = require('mongoose');
var noteModel = require('../models/Note');

module.exports = function(config) {

  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function() {
    console.log('database opened');
  });
};
