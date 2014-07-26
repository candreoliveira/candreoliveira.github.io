'use strict';
angular.module('app', ['ngMask', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ngMask.html'
      })
      .when('/ngMask', {
        template: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);