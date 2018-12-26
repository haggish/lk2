'use strict';

angular.module('lkApp')
    .controller('Archive', function ($scope, $translate, $rootScope) {

        $scope.works = [];
        fetchWorks();

        $rootScope.$on('$translateChangeEnd', function () {
            fetchWorks();
        });

        function fetchWorks () {
            com_laurakarki_translations.fi.ARCHIVE.forEach(function (work, idx) {
                var initial = $scope.works.length === 0;
                var name = 'ARCHIVE.' + idx + '.NAME',
                    desc = 'ARCHIVE.' + idx + '.DESC';
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
