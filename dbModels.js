////////////////////////////////////////////
//
// INITIALIZE DEPENDENCIES AND CONNECT TO DATABASE
//
////////////////////////////////////////////

var mongoose = require('mongoose');
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/index.html';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));



////////////////////////////////////////////
//
// DEFINE USER, VENUE AND IMPARIMENT SCHEMAS
//
////////////////////////////////////////////

var userSchema = mongoose.Schema({
    name: String,
    password: Mixed
});

var venueSchema = mongoose.Schema({
  impairmentInfoAvailable: {
    mobility_impaired: Boolean,
    hearing_impaired: Boolean,
    vision_impaired: Boolean,
  }
  name: String,
  address: Mixed,
  location: {
    latitude: Number,
    longitude: Number
  }
});

var mobilityImpairedSchema = mongoose.Schema({
  ramp: Boolean,
  steps: Boolean,
  elevator: Boolean,
  disabled_parking: Boolean,
  seating: Boolean,
  restroom: Boolean
});



////////////////////////////////////////////
//
// DEFINE USER, VENUE AND IMPARIMENT MODELS
//
////////////////////////////////////////////

var userModel = mongoose.model('userModel', userSchema);
var venueModel = mongoose.model('venueModel', userSchema);
var mobilityImpairedModel = mongoose.model('mobilityImpairedModel', userSchema);



////////////////////////////////////////////
//
// EXPORT SCHEMA MODELS
//
////////////////////////////////////////////

module.exports = userModel;
module.exports = venueModel;
module.exports = mobilityImpairedModel;