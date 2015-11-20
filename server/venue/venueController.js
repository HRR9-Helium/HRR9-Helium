var Venue    = require('./dbModels.js'),
    Q        = require('q'),
    mongoose = require('mongoose')


//-----------------------------------------------------------------------------
//
// VENUE CONTROLLER METHODS
//
//-----------------------------------------------------------------------------

module.exports = {
    searchVenue: function (req, res, next) {

      Venue
        .find({}, {'_id': 0, '__v': 0})
        .then(function(venueList) {
          var results = [];
          venueList.forEach(function(venue) {
          results.push(venue);
          // console.log(results);
          res.json(venueList);
        });
      // console.log(results);
      })

      // var findVenue = Q.nbind(Venue.find, Venue);
      // findVenue({})
      // .then(function(item){
      //   console.log('find venue promise')
      //   console.log(item)
      //   return item;

      // })

      // .then(function (venue) {
      //   if (venue) {
      //     console.log('searchVenue')
      //     return venue
      //     //res.send(venue);
      //   } else {
      //     next(new Error('Venue not added yet'));
      //   }
      // })
      // .fail(function (error) {
      //   console.log('searchVenue fail')
      //   next(error);
      // });
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