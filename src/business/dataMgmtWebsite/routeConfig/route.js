'use strict';
const dbmConfig = require('dbm.config');
const databaseCtrl = require('database.ctrl');
const i18nService = require('i18nService');
const instanceDatabaseCtrl = require('instanceDatabase.ctrl');


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

    }).state('database.instance_database', {
        url: '/instance_database',
        templateUrl: '/src/business/dataMgmtWebsite/views/instance_database.html',
        controller: 'instanceDatabase.ctrl',
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
