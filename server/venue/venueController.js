var Venue    = require('./dbModels.js'),
    Q        = require('q')


module.exports = {
  findUrl: function (req, res, next, name) {
    var findVenue = Q.nbind(Venue.findOne, Venue);
    findVenue({name: name})
      .then(function (venue) {
        if (venue) {
          req.navVenue = venue;
          next();
        } else {
          next(new Error('Venue not added yet'));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  searchVenue: function (req, res, next) {
  var findAll = Q.nbind(Venue.find, Venue);

  findAll({})
    .then(function (venues) {
      res.json(venues);
    })
    .fail(function (error) {
      next(error);
    });
  },

  addVenue: function (req, res, next) {
    var name = req.body.name;
    console.log(req.body);

    var createVenue = Q.nbind(Venue.create, Venue);
    var findVenue = Q.nbind(Venue.findOne, Venue);

    findVenue({name: name})
      .then(function (match) {
        if (match) {
          res.send(match);
        }
      })
      .then(function (name, address) {
        if (name) {
          var newVenue = {
        impairmentInfoAvailable: {
          mobilityImpaired: true,
          hearingImpaired: false,
          visionImpaired: false,
        },
        name: 'String',
        address: 'String',
        location: {
          latitude: 23,
          longitude: 132
        }
      }
        
          return createVenue(newVenue);
        }
      })
      .then(function (createdVenue) {
        if (createdVenue) {
          res.json(createdVenue);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },
};