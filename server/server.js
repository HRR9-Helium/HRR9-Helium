var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

//set server defaults
var port = process.env.PORT || 3000;

require('./middleware.js')(app, express);

//start server
app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;