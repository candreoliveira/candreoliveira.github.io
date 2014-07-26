'use strict';

angular.module('app', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ngMask.html'
      })
      .when('/ngMask', {
        template: '<iframe src=\'https://raw.githubusercontent.com/candreoliveira/ngMask/master/index.html\'>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });