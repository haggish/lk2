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
                /* 'ARTICLES',
                'IN_PUBLICATIONS', */
                'MEMBERSHIPS',
                'RESIDENCES',
                'OTHER'
            ]
        };

        $scope.timeFor = function (line) { // todo clean this shit up
            var start = line.start ? new Date(line.start) : undefined;
            var end = line.end ? new Date(line.end) : undefined;
            var continuing = line.continuing;
            var ret;
            var yearString = function () {
                var ret = start ? start.getUTCFullYear().toString() : '';
                if (end) {
                    if (start === undefined) {
                        ret += ('-' + end.getUTCFullYear());
                    } else if (end.getUTCFullYear() !==
                        start.getUTCFullYear()) {
                        ret += ('-' + end.getUTCFullYear());
                    }
                } else if (continuing) {
                    ret += '-';
                }
                return ret;
            };
            switch (line.granularity) {
                case 'year' :
                    ret = yearString();
                    break;
                case 'month' :
                    ret = start ? (start.getUTCMonth() + 1).toString() : '';
                    if (!end) {
                        ret += ('/' + start.getUTCFullYear());
                        if (continuing) {
                            ret += '-';
                        }
                    } else if (end &&
                        end.getUTCFullYear() === start.getUTCFullYear() &&
                        end.getUTCMonth() !== start.getUTCMonth()) {
                        ret += ('-' + (end.getUTCMonth() + 1) +
                            '/' + start.getUTCFullYear());
                    } else {
                        ret += ('/' + start.getUTCFullYear() + '-' +
                            (end.getUTCMonth() + 1) + '/' +
                            end.getUTCFullYear());
                    }
                    break;
                case 'day':
                    ret = start.getUTCDate() + '.' +
                        (start.getUTCMonth() + 1) +
                        '.' + start.getUTCFullYear();
                    // assume for now there is no end
                    break;
                default:
                    ret = yearString();
                    break;
            }
            return ret;
        };
    });
