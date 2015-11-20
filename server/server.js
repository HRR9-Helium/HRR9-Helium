var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vc = require('./venue/venueController.js')


var app = express();

//set server defaults
var port = process.env.PORT || 3000;

mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/access';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));

db.once('open', function(){
  console.log('opened')
});

// app.get('/api/venues', function (req, res) {
//   var result = vc.searchVenue(req, res);
//   res.send(result);
// });


require('./middleware.js')(app, express);

//start server
app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;