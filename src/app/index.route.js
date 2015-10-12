(function() {
  'use strict';

  angular
    .module('x1group')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home/repositories');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('home.repositories', {
        url: '/repositories',
        templateUrl: 'app/main/repositories/repositories.html',
        controller: 'RepositoriesCtrl',
        controllerAs: 'rep'
      })
      .state('home.favorite', {
        url: '/favorite',
        templateUrl: 'app/main/favorite/favorite.html',
        controller: 'FavorCtrl',
        controllerAs: 'fav'
      })
      .state('home.detail', {
        url: '/detail/:owner/:name',
        templateUrl: 'app/main/detail/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'det'
      });
  }

})();
