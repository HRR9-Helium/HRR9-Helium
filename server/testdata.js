
var MongoClient = require('mongodb');
var url = 'mongodb://localhost:3000/access';
​
var insertDocument = function(db, callback) {
   db.collection('venueModel').insertOne( {
      'impairmentInfoAvailable': {
        'mobilityImpaired': true,
        'hearingImpaired': false,
        'visionImpaired': false,
      },
      'name': 'Awesome Venue',
      'address': '166 Awesome Ave.',
      'location': {
        'latitude': 45.3214213,
        'longitude': 43.3462562
      },
   }, function(err, result) {
        if (err) {throw 'error'}
        callback(result);
  });
};

MongoClient.connect(url, function(err, access) {
  insertDocument(access, function() {
      access.close();
  });
});