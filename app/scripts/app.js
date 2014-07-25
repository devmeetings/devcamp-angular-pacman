'use strict';

/**
 * @ngdoc overview
 * @name pacmanApp
 * @description
 * # pacmanApp
 *
 * Main module of the application.
 */
var app =angular
  .module('pacmanApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
