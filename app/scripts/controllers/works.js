'use strict';

angular.module('lkApp')
    .controller('Works', function ($scope, $translate, $rootScope) {

        $scope.activeSlide = 0;
        $scope.works = [];
        fetchWorks();

        $rootScope.$on('$translateChangeEnd', function () {
            fetchWorks();
        });

        $rootScope.$on('slide.bs.carousel', function (e) {
            console.log(e);
        });

        function fetchWorks () {
            $scope.works.length = 0;
            com_laurakarki_translations.fi.WORKS.forEach(function (work, idx) {
                var name = 'WORKS.' + idx + '.NAME',
                    desc = 'WORKS.' + idx + '.DESC';
                $translate([name, desc]).then(function (translations) {
                    $scope.works.push({
                        name: translations[name],
                        desc: translations[desc]
                    });
                });
            });
        }
    });
