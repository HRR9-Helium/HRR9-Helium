var venueController = require('./venueController.js');

module.exports = function(app){
  //app.param('name', venueController.searchVenue)
  
  app.route('/')
  .get(venueController.allVenues)
  .post(venueController.newVenue);

  //app.get('/:name', venueController.displayVenue);
}