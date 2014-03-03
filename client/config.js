'use strict';

angular.module('app')
.config(function(cfpLoadingBarProvider) {

  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.parentSelector = 'body';

});
