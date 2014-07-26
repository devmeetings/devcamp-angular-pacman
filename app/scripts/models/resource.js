(function() {
  'use strict';


  var Resource = (function() {

    // constructor
    var Resource = function ($key, $timeout, path) {
      _.extend(this, {
        _path: $key(path),
        $timeout: $timeout
      });
    }

    Resource.$factory = ['$goKey', '$timeout', function($key, $timeout) {
      return function(path) {
        return new Resource($key, $timeout, path);
      }
    }];


    Resource.prototype.find = function(uid) {
      console.log("resource#find", uid)
      if (uid) {

        return this._path.$key(uid).$sync(); // should return a model

      } else {
        return this._path.$sync(); // should return a collection
      }
    };

    Resource.prototype.setAttributes = function(uid, attributes) {
        this._path.$key(uid).$set(attributes)
    };

    Resource.prototype.add = function(attributes) {
      return this._path.$add(attributes, {local: true});
    }



    return Resource;

  }());

  
  // angular  factory registration
  angular.module('pacmanApp').factory('server-connection', Resource.$factory);
}());


