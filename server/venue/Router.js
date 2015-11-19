var venueController = require('./venueController.js');

//-----------------------------------------------------------------------------
//
// VENUE ROUTER
//
//-----------------------------------------------------------------------------

module.exports = function(app){
  //app.param('name', venueController.searchVenue)
  
  app.route('/')
  .get(venueController.searchVenue)
  .post(venueController.addVenue);

  //app.get('/:name', venueController.displayVenue);
}