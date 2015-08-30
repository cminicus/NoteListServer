var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('../routes/index');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use('/', routes);

  app.use('/*', function(req, res) {
    res.status(404);
    res.send('Not Found');
  })
}
