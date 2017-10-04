define(['angular', 'dbm.config'], function(angular) {
    'use strict';
    var service = function($q,locale) {
        this.locale=locale;
        this.get = function(locale, name) {
            return $q(function(resolve) {
                require(['i18n/' +locale + '/' + name], function(mod) {
                    resolve(mod);
                    
                });
            });
            // return {'language':'语言'};
        };
    };
    // var module = angular.module('dbm.config');
    // module.service('i18nService', ['$q','locale', service]);
    // return module;
    return service;
});