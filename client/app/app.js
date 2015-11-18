angular.module('app', ['app.addVenue',
                       'app.searchVenue',
                       'app.services',
                       'ngRoute'])
.config(function($routeProvider) {
    $routeProvider
      .when('/searchVenue', {
        templateUrl: 'app/searchVenue/searchVenue.html',
        controller: 'searchVenueController'
      })
      .when('/addVenue', {
        templateUrl: 'app/addVenue/addVenue.html',
        controller: 'addVenueController'
      })
      .otherwise({
        redirectTo: '/searchVenue'
      });
});