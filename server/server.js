var express = require('express');
var path = require('path')

var app = express();

var port = process.env.PORT || 3000
//set server defaults

app.set('client', __dirname +'/client');
app.set('view engine', 'html');

//set a public directory

app.use(express.static(__dirname + '/client'))

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
console.log('dirname')
console.log(__dirname)
console.log('Server now listening on port ' + port);

module.exports = app;