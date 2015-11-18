var express = require('express');
var handler = require('request-handler')

var app = express();

//set server defaults
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname +'app/views');
app.set('view engine', 'html');

//get routes from request handler
app.get('/', handler.renderIndex);
app.get('/create', handler.renderIndex);
app.get('/*', handler.navToLink);

//start server
app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;

