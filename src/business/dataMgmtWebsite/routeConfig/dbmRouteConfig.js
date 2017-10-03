define(['angular','ui.router'], function(angular) {
    'use strict';
    // var config = [{
    //     state: 'database',
    //     templateUrl: 'src/business/dataMgmtWebsite/views/database.html',
    //     controller: 'src/business/dataMgmtWebsite/controllers/databaseCtrl',
    //     services: ['src/business/dataMgmtWebsite/service/i18nService'],
    //     js: [],
    //     resolve: {
    //         i18n: function(i18nService) {
    //             //如何获取在main.js中注入的locale?
    //             return i18nService.get(locale, 'business');
    //         }
    //     }
    // }];
    
    var module = angular.module('dbm.config', ['ui.router']);
    
    return module;
});