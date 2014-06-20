'use strict';

angular.module('lkApp')
    .controller('CV', function ($scope, $translate, $rootScope) {

        $scope.translations = com_laurakarki_translations.fi;
        $scope.sections =
            [ 'EDUCATION', 'ARTISTIC_ACTIVITY', 'JOB_EXPERIENCE' ];
        $scope.subsections = {
            'ARTISTIC_ACTIVITY': [
                'SELECT_PRIVATE_EXHIBITIONS',
                'GROUP_EXHIBITIONS',
                'WORKS_IN_COLLECTIONS',
                'COMMISSIONED_WORKS_PUBLIC_ART',
                'GRANTS',
                'PRIZES',
                'ARTICLES',
                'IN_PUBLICATIONS',
                'MEMBERSHIPS',
                'RESIDENCES',
                'OTHER'
            ]
        };

        $scope.timeFor = function (line) {
            return "1998";
        };
    });
