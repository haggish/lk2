'use strict';

angular.module('lkApp')
    .controller('News', function ($scope, $translate, $cookieStore) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
