var venueController = require('./venueController.js');

//-----------------------------------------------------------------------------
//
// VENUE ROUTER
//
//-----------------------------------------------------------------------------

module.exports = function(app){
  app.route('/')
  .get(venueController.searchVenue)
  .post(venueController.addVenue);
};