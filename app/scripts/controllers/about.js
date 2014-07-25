'use strict';

/**
 * @ngdoc function
 * @name pacmanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pacmanApp
 */
angular.module('pacmanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
