define(['angular', 'dbm.config'], function(angular) {
    'use strict';
    var service = function($q) {
        this.get = function(locale, name) {
            return $q(function() {
                require(['i18n/' + locale + '/' + name], function(mod) {
                    resolve(mod);
                });
            });
        };
    };
    var module = angular.module('dbm.config');
    module.service('i18nService', ['$q', service]);
    return module;
});