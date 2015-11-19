var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//-----------------------------------------------------------------------------
//
// INITIALIZE SERVER WITH DEFAULT PORTS
//
//-----------------------------------------------------------------------------

var app = express();

// Set default server ports
var port = process.env.PORT || 3000;
require('./middleware.js')(app, express);

// Initialize server
app.listen(port);
console.log('Server now listening on port ' + port);

// Export app
module.exports = app;