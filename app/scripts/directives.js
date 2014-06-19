'use strict';

angular.module('lkApp')
    .directive('lkTab', function () {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            template: '<li class="nav nav-pills pull-right" ng-class="{active : name.toUpperCase() === selectedTab}"><a translate href="#/{{name}}">{{name.toUpperCase()}}</a></li>',
            replace: true
        }
    })
    .directive('lkCarousel', function ($rootScope) {
        var handle_nav = function (e) {
            e.preventDefault();
            var nav = $(this);
            nav.parents('.carousel').carousel(nav.data('slide'));
        };

        var linker = function (scope, element) {
            element.carousel({
                interval: false,
                wrap: true
            })
                .on('click', '.carousel-control', handle_nav);

        };
        return {
            restrict: 'A',
            link: linker
        };
    });
