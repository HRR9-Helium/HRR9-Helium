var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:3000/access';

//-----------------------------------------------------------------------------
//
// SAMPLE VENUE INFORMATION FOR TESTING PURPOSS ONLY
//
//-----------------------------------------------------------------------------

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


// Test document creation
MongoClient.connect(url, function(err, access) {
  insertDocument(access, function() {
      access.close();
  });
});