'use strict';

// Setting up route
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/first', {
        templateUrl: 'view/index.html',
        controller: 'Home'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
