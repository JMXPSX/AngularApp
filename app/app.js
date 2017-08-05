'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/about'});
    
    $routeProvider.when('/about', {
        templateUrl : 'about/about-page.html'
    });
    
    $routeProvider.when('/lesson-1', {
        templateUrl : 'lesson-1/main-lesson-1.html'
    });
    
    $routeProvider.when('/lesson-2', {
        templateUrl : 'lesson-2/main-lesson-2.html'
    });
    
    $routeProvider.when('/lesson-3', {
        templateUrl : 'lesson-3/main-lesson-3.html'
    });
    
    $routeProvider.when('/lesson-4', {
        templateUrl : 'lesson-4/main-lesson-4.html'
    });
    
    $routeProvider.when('/lesson-5', {
        templateUrl : 'lesson-5/main-lesson-5.html'
    });
    
    $routeProvider.when('/lesson-6', {
        templateUrl : 'lesson-6/main-lesson-6.html'
    });
    
    $routeProvider.when('/lesson-7', {
        templateUrl : 'lesson-7/main-lesson-7.html'
    });
    
    $routeProvider.when('/lesson-8', {
        templateUrl : 'lesson-8/main-lesson-8.html'
    });
    
    $routeProvider.when('/lesson-9', {
        templateUrl : 'lesson-9/main-lesson-9.html'
    });
    
    $routeProvider.when('/lesson-10', {
        templateUrl : 'lesson-10/main-lesson-10.html'
    });
}]);
