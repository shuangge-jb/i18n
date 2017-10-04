define(['dbm.config', 'database.ctrl', 'i18nService'], function(dbmConfig, databaseCtrl, i18nService) {
    'use strict';
    var config = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/database');
        $stateProvider.state('database', {
            url: '/database',
            templateUrl: '/src/business/dataMgmtWebsite/views/database.html',
            controller: 'database.ctrl',
            resolve: {
                i18n: function(i18nService) {
                    //如何获取在main.js中注入的locale?
                    var locale = i18nService.locale;
                    return i18nService.get(locale, 'business');

                }
            },

        });

    };

    dbmConfig.config(['$stateProvider', '$urlRouterProvider', config]);
    return dbmConfig;
});