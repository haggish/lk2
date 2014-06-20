'use strict';

angular.module('lkApp')
    .controller('Works', function ($scope, $translate, $rootScope) {

        $scope.works = [];
        fetchWorks();

        $rootScope.$on('$translateChangeEnd', function () {
            fetchWorks();
        });

        function fetchWorks () {
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
    });
