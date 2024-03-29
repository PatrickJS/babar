'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
  'app.filters',
  'app.modules',
  'app.services',
  'app.directives',
  'app.controllers',
  'app.dependencies'
]);

angular.module('app.dependencies', [
  'ngAnimate',
  'ui.utils',
  'ui.router',
  'ui.bootstrap',
  'chieffancypants.loadingBar'
]);
