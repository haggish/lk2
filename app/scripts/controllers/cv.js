'use strict';

angular.module('lkApp')
    .controller('CV', function ($scope, $translate, $rootScope) {

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

        /*
        fetchCV();

        $rootScope.$on('$translateChangeEnd', function () {
            fetchCV();
        });

        function fetchCV() {
            com_laurakarki_translations.fi.WORKS.forEach(function (work, idx) {
                var initial = $scope.works.length == 0;
                var name = 'WORKS.' + idx + '.NAME',
                    desc = 'WORKS.' + idx + '.DESC';
                $translate([name, desc]).then(function (translations) {
                    if (initial) {
                        $scope.works.push({
                            name: translations[name],
                            desc: translations[desc]
                        });
                    } else {
                        $scope.works[idx].name = translations[name];
                        $scope.works[idx].desc = translations[desc];
                    }
                });
            });
        }
        */
    });
