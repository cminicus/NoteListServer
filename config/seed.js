var Note = require('../models/Note');

Note.find({}).remove(function() {
  Note.create({
    title: "Test 1",
    body: "This is a greate note!!!!",
    published: new Date('1/13/15')
  }, {
    title: "Test 2",
    body: "This is another great note!!!!",
    published: new Date('5/13/15')
  }, {
    title: "Test 3",
    body: "This is a so great note!!!!",
    published: new Date('7/13/15')
  });
});
