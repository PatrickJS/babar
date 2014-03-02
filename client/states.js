'use strict';

angular.module('app')
.config(function($stateProvider) {

  $stateProvider
  .state('home', {
    url: '',
    templateUrl: '/templates/home.html'
  })

})
.config(function($locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
})
.run(function($rootScope, $stateParams, $state) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

});
