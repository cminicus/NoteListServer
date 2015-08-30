var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  published: Date
});

module.exports = mongoose.model('Note', noteSchema);
