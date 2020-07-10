(function () {
  'use strict';

  angular.module('App')
  .config(routeConfig);

  routeConfig.$inject=['$stateProvider','$urlRouterProvider'];

  function routeConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'src/home.html'
    })
    .state('about',{
      url:'/about',
      templateUrl:'src/about.html'
    })
    .state('coordinators',{
      url:'/coordinators',
      templateUrl:'src/coordinators.html'
    })
    .state('contact',{
      url:'/contacts',
      templateUrl:'src/contacts.html'
    });
  }
})()
