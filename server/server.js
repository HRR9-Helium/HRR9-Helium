var express = require('express');

var app = express();

//set server defaults
app.set('port', process.env.PORT || 3000);
app.set('client', __dirname +'client');
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
app.get('/','../client');



//start server
app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;