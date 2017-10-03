'use strict';
var languageToken='zh-CN';
require.config({
    baseUrl: './',
    paths: {
        'angular': './lib/angular.min',
        'ui.router': './lib/angular-ui-router',
        'framework':'src/framework/framework',
        'dbm.config':'src/business/dataMgmtWebsite/routeConfig/dbmRouteConfig',
        'database.ctrl':'src/business/dataMgmtWebsite/controllers/databaseCtrl',
        'i18nService':'src/business/dataMgmtWebsite/services/i18nService',
        'route':'src/business/dataMgmtWebsite/routeConfig/route',

        'httpService':'src/service/httpService',
        'i18n':'i18n/'+languageToken+'/',
        
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps:['angular'],
            
        },
    },
});
define(['framework'], function(app) {
    
    var state = {
        session: '666',
        locale: 'zh-CN'
    };
    app.value('session', state.session);
    app.value('locale', state.locale);
    // angular.controller('appController', function() {

    // });
    angular.bootstrap(document, [app.name]);
});