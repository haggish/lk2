'use strict';

angular
    .module('lkApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap',
        'pascalprecht.translate'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/new/:whatever', {
                templateUrl: '../views/news.html',
                controller: 'News'
            })
            .when('/intro/fi', {
                templateUrl: '../views/intro_fi.html'
            })
            .when('/intro/en', {
                templateUrl: '../views/intro_en.html'
            })
            .when('/cv/:whatever', {
                templateUrl: '../views/cv.html',
                controller: 'CV'
            })
            .when('/works/:whatever', {
                templateUrl: '../views/works.html',
                controller: 'Works'
            })
            .when('/other/:whatever', {
                templateUrl: '../views/other.html'
            })
            .otherwise({
                redirectTo: '/new/en'
            });
    })
    .config(function ($translateProvider) {
        $translateProvider.translations('en', com_laurakarki_translations.en);
        $translateProvider.translations('fi', com_laurakarki_translations.fi);
        $translateProvider.preferredLanguage('en');
    });
