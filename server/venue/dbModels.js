////////////////////////////////////////////
//
// INITIALIZE DEPENDENCIES AND CONNECT TO DATABASE
//
////////////////////////////////////////////

var mongoose = require('mongoose');


////////////////////////////////////////////
//
// DEFINE USER, VENUE AND IMPARIMENT SCHEMAS
//
////////////////////////////////////////////

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

////////////////////////////////////////////
//
// DEFINE USER, VENUE AND IMPARIMENT MODELS
//
////////////////////////////////////////////

var userModel = mongoose.model('userModel', userSchema);
var Venue = mongoose.model('venueModel', venueSchema);
var mobilityImpairedModel = mongoose.model('mobilityImpairedModel', mobilityImpairedSchema);


//seed data to create collection
var silence = new Venue({
  impairmentInfoAvailable: {
    mobilityImpaired: true,
    hearingImpaired: false,
    visionImpaired: false,
  },
  name: 'String',
  address: 'String',
  location: {
    latitude: 1,
    longitude: 2
  }
});

silence.save();
////////////////////////////////////////////
//
// EXPORT SCHEMA MODELS
//
////////////////////////////////////////////

module.exports = userModel;
module.exports = Venue;
module.exports = mobilityImpairedModel;