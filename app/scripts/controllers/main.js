'use strict';

/**
 * @ngdoc function
 * @name pacmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pacmanApp
 */
angular.module('pacmanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
