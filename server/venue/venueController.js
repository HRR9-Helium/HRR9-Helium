var Venue    = require('./dbModels.js'),
    Q        = require('q'),
    mongoose = require('mongoose')


//-----------------------------------------------------------------------------
//
// VENUE CONTROLLER METHODS
//
//-----------------------------------------------------------------------------

module.exports = {
    searchVenue: function (req, res, next, code) {
    var findVenue = Q.nbind(Venue.findOne, Venue);
    findVenue({code: code})
      .then(function (venue) {
        if (venue) {
          //req.navLink
          //req.navVenue = venue;
          next();
        } else {
          next(new Error('Venue not added yet'));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  addVenue: function (req, res, next) {

    var name = req.body.name;
    var address = req.body.address;
 
    var createVenue = Q.nbind(Venue.create, Venue);
    var findVenue = Q.nbind(Venue.findOne, Venue);
    var saveVenue = Q.nbind(Venue.save, Venue);

    findVenue({name: name})
      .then(function (match) {
        if (match) {
          res.send(match);
        } else{
          console.log('no match')
        }
      })
      .then(function () {
        if (name) {
      var newVenue = new Venue ({
        impairmentInfoAvailable: {
          mobilityImpaired: true,
          hearingImpaired: false,
          visionImpaired: false,
        },
        name: name,
        address: address,
        location: {
          latitude: 100,
          longitude: 100
        }
      })

      newVenue.save()

        //return createVenue(newVenue);
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