//-----------------------------------------------------------------------------
//
// INITIALIZE DEPENDENCIES AND CONNECT TO DATABASE
//
//-----------------------------------------------------------------------------

var mongoose = require('mongoose');
// mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/access';
// mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));



//-----------------------------------------------------------------------------
//
// DEFINE USER, VENUE AND IMPARIMENT SCHEMAS
//
//-----------------------------------------------------------------------------

var userSchema = mongoose.Schema({
    name: String,
    password: Number
});

var venueSchema = mongoose.Schema({
  impairmentInfoAvailable: {
    mobilityImpaired: Boolean,
    hearingImpaired: Boolean,
    visionImpaired: Boolean,
  },
  name: String,
  address: String,
  location: {
    latitude: Number,
    longitude: Number
  }
});

var mobilityImpairedSchema = mongoose.Schema({
  ramp: Boolean,
  steps: Boolean,
  elevator: Boolean,
  disabledParking: Boolean,
  seating: Boolean,
  restroom: Boolean
});

// Implement review schema at future time
// var reviewSchema = mongoose.Schema({
//     username: String,
//     text: Number
// });

//-----------------------------------------------------------------------------
//
// DEFINE USER, VENUE AND IMPARIMENT MODELS
//
//-----------------------------------------------------------------------------

var userModel = mongoose.model('userModel', userSchema);
var venueModel = mongoose.model('venueModel', venueSchema);
var mobilityImpairedModel = mongoose.model('mobilityImpairedModel', mobilityImpairedSchema);



//-----------------------------------------------------------------------------
//
// EXPORT SCHEMA MODELS
//
//-----------------------------------------------------------------------------

module.exports = userModel;
module.exports = venueModel;
module.exports = mobilityImpairedModel;