'use strict';

angular
    .module('lkApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
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
                templateUrl: '../views/cv.html'
            })
            .when('/works/:whatever', {
                templateUrl: '../views/works.html'
            })
            .when('/other/:whatever', {
                templateUrl: '../views/other.html'
            })
            .otherwise({
                redirectTo: '/new/en'
            });
    })
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            'PROFESSION': 'visual artist',

            'NEW': 'new',
            'INTRO': 'intro',
            'CV': 'cv',
            'WORKS': 'works',
            'OTHER': 'other',
            'CONTACT': 'contact',

            'BLOG': 'blog',
            'AAF': 'artists\' association of finland',
            'EMAIL': 'laura dot karki at gmail dot com',

            'UPCOMING.1': 'Finland-Station',
            'UPCOMING.1.DESC': 'Frankfurt, Germany between 28.-31.8.2014 ' +
                'invited in the Westhafenpier exhibition space by river Main',
            'UPCOMING.2': 'Katariina Gallery',
            'UPCOMING.2.DESC': 'Solo exhibition between 19.11.-7.12.2014, ' +
                'Helsinki',
            'UPCOMING.3': 'Kuusisto Summer',
            'UPCOMING.3.DESC': 'Group exhibition between 17.5.-15.9.2014, ' +
                'My Water, Kaarina',

            'LANGUAGE': 'suomeksi'
        });

        $translateProvider.translations('fi', {
            'PROFESSION': 'kuvataiteilija',

            'NEW': 'uutta',
            'INTRO': 'esittely',
            'CV': 'cv',
            'WORKS': 'työt',
            'OTHER': 'muu',
            'CONTACT': 'yhteys',

            'BLOG': 'blogi',
            'AAF': 'kuvataitelijamatrikkeli',
            'EMAIL': 'laura piste karki miukumauku gmail piste com',

            'UPCOMING.1': 'Suomi-asema',
            'UPCOMING.1.DESC': 'Frankfurt, Saksa 28.-31.8.2014 - kutsuttuna ' +
                'taiteilijana mukana Westhafenpier-näyttelytilassa Main-joen ' +
                'rannalla',
            'UPCOMING.2': 'Galleria Katariina',
            'UPCOMING.2.DESC': 'Yksityisnäyttely 19.11.-7.12.2014, Helsinki',
            'UPCOMING.3': 'Kuusiston kesä',
            'UPCOMING.3.DESC': 'Yhteisnäyttely 17.5.-15.9.2014, My Water, ' +
                'Kaarina',

            'LANGUAGE': 'in english'
        });

        $translateProvider.preferredLanguage('en');
    });
