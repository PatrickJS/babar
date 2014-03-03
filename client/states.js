'use strict';

angular.module('app')
.config(function($stateProvider) {

  $stateProvider
  .state( 'app', {
    url: '',
    templateUrl: '/templates/ng-view.html',
    abstract: true,
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
    url: '/dashboard',
    templateUrl: '/templates/dashboard.html'
  });

})
.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.controller('AppCtrl', function($scope, $stateParams, $state) {
  $scope.$state = $state;
  $scope.$stateParams = $stateParams;

})

.run(function() {

});
