//-----------------------------------------------------------------------------
//
// INITIALIZE DEPENDENCIES AND CONNECT TO DATABASE
//
//-----------------------------------------------------------------------------

var mongoose = require('mongoose');



//-----------------------------------------------------------------------------
//
// DEFINE USER, VENUE AND IMPARIMENT SCHEMAS
//
//-----------------------------------------------------------------------------

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
  },
  mobilityImpaired:{
    ramp: Boolean,
    steps: Boolean,
    elevator: Boolean,
    disabledParking: Boolean,
    seating: Boolean,
    restroom: Boolean  
  }
});

//-----------------------------------------------------------------------------
//
// DEFINE USER, VENUE AND IMPARIMENT MODELS
//
//-----------------------------------------------------------------------------

var Venue = mongoose.model('venueModel', venueSchema);


//-----------------------------------------------------------------------------
//
// EXPORT SCHEMA MODELS
//
//-----------------------------------------------------------------------------

module.exports = Venue;
