'use strict';

/**
 * @ngdoc function
 * @name pacmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pacmanApp
 */
angular.module('pacmanApp')
  .controller('MainCtrl', ['$scope', 'DEFAULT_PLAYERS', function ($scope, DEFAULT_PLAYERS) {
    $scope.$watch(function () {
        return DEFAULT_PLAYERS;
      }, function(nV) { console.log('players', nV); },
      true
    );
  }]);