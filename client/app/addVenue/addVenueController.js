angular.module('app.addVenue', [])

.controller('addVenueController', function($scope, $location, Venues){

    $scope.venue = {};

    $scope.addVenue = function(){
      Venues.addVenue($scope.venue)
        .then(function(){
          $location.path('/searchVenue');
        });
    };
  });
