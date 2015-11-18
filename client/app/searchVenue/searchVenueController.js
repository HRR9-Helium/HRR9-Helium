angular.module('app.searchVenue', [])

.controller('searchVenueController', function($scope, Venues) {
  $scope.data = {};
  $scope.getVenues = function() {
    Venues.getVenues($scope.data)
      .then(function (venues) {
        $scope.data.venues = venues;
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  $scope.getVenues();
});