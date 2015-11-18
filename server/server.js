var express = require('express');
var path = require('path')

var app = express();
var engines = require('consolidate');

//set server defaults
var port = process.env.PORT || 3000

//set a public directory
app.use(express.static('client'));

app.get('/venue', function (req, res) {
  models.venueModel.find(function(err, venues) {
    if (err)
      res.send(err);
    res.json(venues);
  });
});

// base route -> go to angular
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/../client/index.html'));
});


//start server
app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;