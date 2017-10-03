define(['angular', 'dbm.config',
        'i18nService',
        'database.ctrl', 'route'
    ],
    function(angular) {
        'use strict';
        var dependency = ['dbm.config'];

        var module = angular.module('framework', dependency);
        return module;
    });