angular.module('app.services', [])
  .factory('Venues', function($http) {

    var getVenues = function() {
      return $http({
        method: 'GET',
        url: '/api/venues'
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(error){

      });
    };

    var addVenue = function(data) {
      return $http({
        method: 'POST',
        url: '/api/venues',
        data: data
      });
    };

    return {
      getVenues: getVenues,
      addVenue: addVenue
    };
  });