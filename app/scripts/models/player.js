(function(){ 'use strict';

 	var Player = (function(){
 		var Player = function (futurePlayerData) {
		  /* DATA IS IMMEDIATELY AVAILABLE */
		  if (!futurePlayerData.inspect) {
		    _.extend(this, futurePlayerData);
    		return;	
		  }

		  /* THE PROMISE WILL BE UNWRAPPED FIRST */
		  this.$unwrap(futurePlayerData);
 		}


		/* THE FACTORY WE'LL USE TO REGISTER WITH ANGULAR */
		Player.$factory = ['server-connection', function(Resource) {
		  _.extend(Player, {
		    $$resource: new Resource('/players'),
		  });

		  return Player;
		}];

		/* ANGULAR MODULE REGISTRATION */

		/* FETCH A UNIT */
		Player.$find = function(uid) {
			console.log(uid)
		  /* FALLS BACK ON AN INSTANCE OF RESOURCE */
		  var futurePlayerData = Player.$$resource.find(uid);
		  console.log(futurePlayerData);

		  if (uid) return new Player(futurePlayerData);

		  return Player.$unwrapCollection(futurePlayerData);

		};

		Player.$add = function (player) {
			return Player.$$resource.add(player);
		};

		Player.prototype.$unwrap = function(futureData) {
      var self = this;

      this.$futureData = futureData;
      this.$futureData.$on('ready', function() {
        _.extend(self, futureData);
      });
    };

    Player.$unwrapCollection = function(futurePlayerData) {
		  var collection = {};

		  collection.$resource = futurePlayerData;
		  collection

		  futurePlayerData.$on('ready', function() {
		  	var units = futurePlayerData.$omit();
	      _.forOwn(units, function(unit, id) {
	        collection[id] = new Player(unit);
	      });
		  });

		  return collection;
		};



 		return Player;
 	}());

	angular.module('pacmanApp').factory('Player', Player.$factory);
	

}());