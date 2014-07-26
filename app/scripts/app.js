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
  })
  .constant('PLAYERS_ACTIONS', {
    37: {
      action: {
        x: -1,
        y: 0
      },
      playerId: 1
    },
    38: {
      action: {
        x: 0,
        y: 1
      },
      playerId: 1
    },
    39: {
      action: {
        x: 1,
        y: 0
      },
      playerId: 1
    },
    40: {
      action: {
        x: 0,
        y: -1
      },
      playerId: 1
    },
    65: {
      action: {
        x: -1,
        y: 0
      },
      playerId: 0
    },
    87: {
      action: {
        x: 0,
        y: 1
      },
      playerId: 0
    },
    68: {
      action: {
        x: 1,
        y: 0
      },
      playerId: 0
    },
    83: {
      action: {
        x: 0,
        y: -1
      },
      playerId: 0
    }
  })
  
