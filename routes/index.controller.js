var Note = require('../models/Note');
var _ = require('lodash');

// Get a list of all notes
exports.index = function(req, res) {
  Note.find(function(error, notes) {
    if (error) { return handleError(res, error); }
    return res.status(200).json(notes);
  });
};

// Adds a new note
exports.create = function(req, res) {
  Note.create(req.body, function(error, note) {
    if (error) { return handleError(res, error); }
    return res.status(201).json(note);
  });
};

// Updates a note
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; } // so as not to merge
  Note.findById(req.param.id, function(error, note) {
    if (error) { return handleError(res, error); }
    if (!note) { return res.status(404).send('Not Found'); }
    var updatedNote = _.merge(note, req.body);
    updatedNote.save(function(error) {
      if (error) { return handleError(res, error); }
      return res.status(200).json(note);
    })
  })
};

// Deletes a note
exports.destroy = function(req, res) {
  Note.findById(req.param.id, function(error, note) {
    if (error) { return handleError(res, error); }
    if (!note) { return res.status(404).send('Not Found'); }
    note.remove(function(error) {
      if(error) { return handleError(res, err); }
        return res.status(204).send('No Content');
    })
  });
};

function handleError(res, error) {
  return res.status(500).send(error);
}
