requirejs.config(window.requirejsConfig);

require([
  'angular',
  'js/app'
], function (angular) {
  angular.bootstrap(document, ['ng-boilerplate']);
});