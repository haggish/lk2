'use strict';

angular.module('lkApp')
    .controller('Container',
    function ($scope, $translate, $cookieStore, $location) {

        var preferredLanguage = language();
        if (!preferredLanguage) {
            preferredLanguage = 'en';
            language(preferredLanguage);
        }

        $scope.tabs = [ 'NEW', 'INTRO', 'CV', 'WORKS', 'OTHER' ];
        $scope.selectedTab = $scope.tabs[0];

        $scope.select = function (tab) {
            $scope.selectedTab = tab;
        };

        $scope.changeLanguage = function () {
            var newLocale = preferredLanguage === 'en' ? 'fi' : 'en';
            $translate.use(newLocale);
            language(newLocale);
            if (localeSpecific($location.path())) {
                $location.path(relocalized($location.path(), newLocale));
            }
        };

        $scope.locale = function () {
            return $translate.use();
        };


        function language (value) {
            // todo angular-translate has something ready-made for this
            var cookieName = 'com.laurakarki.preferredLanguage';
            if (!value) {
                return $cookieStore.get(cookieName);
            } else {
                $cookieStore.put(cookieName, value);
                preferredLanguage = value;
            }
        }

        function localeSpecific (path) {
            // todo generalization magic when actually needed
            return path.indexOf('/intro/') === 0;
        }

        function relocalized (path, newLocale) {
            // todo regexp magic when actually needed
            return '/intro/' + newLocale;
        }
    });
