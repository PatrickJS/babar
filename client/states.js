'use strict';

angular.module('app')
.config(function($stateProvider) {

  $stateProvider
  .when('home', {
    url: '/account',
    template: '<h1>hello</h1>'
  })

  .otherwise({
    redirectTo: '/'
  });
})
.config(function($locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
})
.run(function($rootScope, $stateParams, $state) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

});
