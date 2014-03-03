'use strict';

angular.module('app')
.constant('templateBaseUrl', '/templates')
.config(function($stateProvider, templateBaseUrl) {

  $stateProvider
  .state( 'app', {
    url: '',
    abstract: true,
    views: {
      'main': {
        templateUrl: templateBaseUrl + '/ng-view.html',
        controller: 'DashboardCtrl'
      },
      'navbar': {
        templateUrl: templateBaseUrl + '/navbar.html',
        controller: 'NavbarCtrl'
      },
      'sidebar': {
        templateUrl: templateBaseUrl + '/sidebar.html',
        controller: 'SidebarCtrl'
      }
    }
  })
  .state('app.dashboard', {
    url: '/dashboard',
    templateUrl: templateBaseUrl + '/dashboard.html'
  });

})
.config(function($urlRouterProvider) {

  $urlRouterProvider
    .when('/', '/dashboard')
    .otherwise('/dashboard');

})
.config(function($locationProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

})
.run(function($rootScope, $stateParams, $state) {

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

});
