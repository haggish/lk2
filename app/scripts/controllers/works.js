'use strict';

angular.module('lkApp')
    .controller('Works', function ($scope, $translate) {

        $scope.works = [];
        fetchWorks();


        function fetchWorks () {
            com_laurakarki_translations.fi.WORKS.forEach(function (work, idx) {
                var name = 'WORKS.' + idx + '.NAME',
                    desc = 'WORKS.' + idx + '.DESC';
                $translate([name, desc]).then(function (translations) {
                    $scope.works.push({
                        name: translations[name],
                        desc: translations[desc]
                    });
                })
            });
        }
    });
