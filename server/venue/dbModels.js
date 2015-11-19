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
// SEED DATA TO FORCE CREATION OF COLLECTION
//
//-----------------------------------------------------------------------------
var seed = new Venue({
  impairmentInfoAvailable: {
    mobilityImpaired: true,
    hearingImpaired: false,
    visionImpaired: false,
  },
  name: 'Mauricio',
  address: '1705 Market Place, Bakersfield, CA 93309',
  location: {
    latitude: 35.3667,
    longitude: 119.0167
  },
  mobilityImpaired:{
    ramp: false,
    steps: false,
    elevator: false,
    disabledParking: false,
    seating: false,
    restroom: false  
  }
});

seed.save();



//-----------------------------------------------------------------------------
//
// EXPORT SCHEMA MODELS
//
//-----------------------------------------------------------------------------

module.exports = Venue;
