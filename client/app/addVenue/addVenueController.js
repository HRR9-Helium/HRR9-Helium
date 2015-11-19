angular.module('app.addVenue', [])

.controller('addVenueController', function($scope, $location, Venues){
    // Your code here
    $scope.venue = {};

    $scope.addVenue = function(){
      Venues.addVenue($scope.venue)
        .then(function(){
          $location.path('/venues');
        });
    };
  });
