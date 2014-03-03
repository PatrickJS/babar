'use strict';

angular.module('app')
.config(function($stateProvider) {

  $stateProvider
  .state( 'app', {
    url: '',
    template: '<div ui-view></div>',
    abstract: true,
    controller: 'AppCtrl'
  })
  // .state('app.dashboard', {
  //   url: '/dashboard',
  //   templateUrl: '/dashboard/template.html'
  // });

})
.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.controller('AppCtrl', function($scope) {

})

.run(function($rootScope, $stateParams, $state) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

});
