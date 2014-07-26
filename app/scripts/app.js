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
        column: -1,
        row: 0
      },
      playerId: 1
    },
    38: {
      action: {
        column: 0,
        row: 1
      },
      playerId: 1
    },
    39: {
      action: {
        column: 1,
        row: 0
      },
      playerId: 1
    },
    40: {
      action: {
        column: 0,
        row: -1
      },
      playerId: 1
    },
    65: {
      action: {
        column: -1,
        row: 0
      },
      playerId: 0
    },
    87: {
      action: {
        column: 0,
        row: 1
      },
      playerId: 0
    },
    68: {
      action: {
        column: 1,
        row: 0
      },
      playerId: 0
    },
    83: {
      action: {
        column: 0,
        row: -1
      },
      playerId: 0
    }
  })
  
