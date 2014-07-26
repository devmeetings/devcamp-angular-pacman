'use strict';

/**
 * @ngdoc function
 * @name pacmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pacmanApp
 */
angular.module('pacmanApp')

  .controller('MainCtrl', function ($scope, $goQuery, $goUsers) {
  	
  	$scope.showMoves = function () {
  		$scope.moves = $goQuery('/moves', {});
  		$scope.moves.$sync()
  	}

  	$scope.showPlayers = function () {
  		$scope.players = $goUsers();
  		$scope.players.$sync();
  	}


  	$scope.move = function () {
  		$scope.players.$self().then(function(user){
	  		$scope.moves.$add({
	  			x: $scope.nextMove.x,
	  			y: $scope.nextMove.y,
	  			user: user.id
	  		}).then(function() {
	  			$scope.$apply(function() {
	  				$scope.nextMove = null;
	  			});
	  		});
  		});

  	};  	

  	$scope.showMoves();
  	$scope.showPlayers();

  })
  .filter('isActivePlayer', function() {
  	return function(input, players) {
  		var result = [];
  		angular.forEach(input.$omit(), function(move){
  			if (!!players[move.user]) {
  				result.push(move);
  			}
  		});

  		return result;
  	};
  })

