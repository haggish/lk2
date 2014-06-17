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
    });
