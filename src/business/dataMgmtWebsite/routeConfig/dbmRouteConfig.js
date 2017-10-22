'use strict';

var config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/database');
    $stateProvider.state('database', {
        url: '/database',
        template: require('src/business/dataMgmtWebsite/views/database.html'),
        controller: 'database.ctrl',
        // controllerAs:"database",
        resolve: {
            i18n: function(i18nService) {
                var locale = i18nService.locale;
                return i18nService.get(locale, 'business');
            },
           
            deps: function($q, $ocLazyLoad) {
                return $ocLazyLoad.load('leftMenu');
            }
        }

    }).state('database.instance_database', {
        url: '/instance_database',
        template: require('src/business/dataMgmtWebsite/views/instance_database.html'),
        controller: 'instanceDatabase.ctrl',
        resolve: {
            i18n: function(i18nService) {
                //如何获取在main.js中注入的locale?
                var locale = i18nService.locale;
                return i18nService.get(locale, 'business');
            },
            deps: function($q, $ocLazyLoad) {
                return $ocLazyLoad.load('instance');
            }
        }
    }).state('database.instance_redis', {
        url: '/instance_redis',
        template: require('src/business/dataMgmtWebsite/views/instance_redis.html'),
        controller: 'redis.ctrl',
        resolve: {
            i18n: function(i18nService) {
                //如何获取在main.js中注入的locale?
                var locale = i18nService.locale;
                return i18nService.get(locale, 'business');
            },
            deps: function($q, $ocLazyLoad) {
                return $ocLazyLoad.load('redis');
            }
        },
    });
};
var module = angular.module('dbm.config', ['ui.router', 'oc.lazyLoad']);
module.config(['$stateProvider', '$urlRouterProvider', config]);
module.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [{
            name: 'leftMenu',
            files: ['leftMenu.bundle.js']
        }, {
            name: 'instance',
            files: ['instance.bundle.js']
        }, {
            name: 'redis',
            files: ['redis.bundle.js']
        }],
        debug: true,
        cache: false
    });
}]);