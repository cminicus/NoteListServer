var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./config/config')[env];
require('./config/express')(app);
require('./config/mongoose')(config);
if (config.seedDB) { require('./config/seed'); }

app.listen(config.port);
console.log('Listening on port ' + config.port + ' ...');
