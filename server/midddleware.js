var bodyParser  = require('body-parser'),


module.exports = function (app, express) {

  var venueRouter = express.Router();

  app.use(bodyParser.json());
  app.use(express.static('client'))


  app.use('/api/venues', venueRouter); // user venue router for venue request


  // inject our routers into their respective route files
  require('../venues/venueRoutes.js')(venueRouter);
};