'use strict';

angular.module('testFeed', [
    'ngAnimate',
    'ngRoute',
    'infinite-scroll'
])
.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
    })
    .otherwise({
        redirectTo: '/404'
    });
});