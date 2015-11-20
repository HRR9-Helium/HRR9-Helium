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

 //-----------------------------------------------------------------------------     //-----------------------------------------------------------------------------
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
  name: "Mauricio's",    
  address: '1705 Market Place, Bakersfield, CA 93309',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: false,   
    steps: true,    
    elevator: false,   
    disabledParking: false,    
    seating: true,    
    restroom: true      
  }    
});    
   
seed.save();

var a = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Bakersfield Museum of Art',    
  address: '1936 R St, Bakersfield, CA 93306',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: true,    
    elevator: false,   
    disabledParking: false,    
    seating: true,    
    restroom: true      
  }    
});    
   
a.save();

var b = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Bakersfield Museum of Art',    
  address: '1936 R St, Bakersfield, CA 93306',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: true,    
    elevator: false,   
    disabledParking: false,    
    seating: true,    
    restroom: true      
  }    
});    
   
b.save();

var c = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Buena Vist Museum of Natural History',    
  address: '2018 Chester Ave, Bakersfield, CA 93301',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: false,    
    elevator: false,   
    disabledParking: true,    
    seating: true,    
    restroom: true      
  }    
});    
   
c.save();

var d = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Golden Ox',    
  address: '6001 Niles, Bakersfield, CA 93306',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: false,    
    elevator: false,   
    disabledParking: true,    
    seating: true,    
    restroom: true      
  }    
});    
   
d.save()


var e = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Mariscos La Sirena',    
  address: '3907 Niles St, Bakersfield, CA 93306',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: false,    
    elevator: false,   
    disabledParking: true,    
    seating: true,    
    restroom: true      
  }    
});    
   
e.save();

var f = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Subway',    
  address: '6217 Oswell St, Bakersfield, CA 93306',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: false,    
    elevator: false,   
    disabledParking: true,    
    seating: true,    
    restroom: true      
  }    
});    
   
f.save();

var c = new Venue({   
  impairmentInfoAvailable: {   
    mobilityImpaired: true,    
    hearingImpaired: false,    
    visionImpaired: false,   
  },   
  name: 'Buena Vist Museum of Natural History',    
  address: '2018 Chester Ave, Bakersfield, CA 93301',   
  location: {    
    latitude: 35.3667,   
    longitude: 119.0167    
  },   
  mobilityImpaired:{   
    ramp: true,   
    steps: false,    
    elevator: false,   
    disabledParking: true,    
    seating: true,    
    restroom: true      
  }    
});    
   
c.save();


//-----------------------------------------------------------------------------
//
// EXPORT SCHEMA MODELS
//
//-----------------------------------------------------------------------------

module.exports = Venue;
