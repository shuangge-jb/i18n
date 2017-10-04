'use strict';
var languageToken = 'zh-CN';

require.config({
    baseUrl: './',
    paths: {
        'angular': './lib/angular.min',
        'ui.router': './lib/angular-ui-router',
        'framework': 'src/framework/framework',
        'dbm.config': 'src/business/dataMgmtWebsite/routeConfig/dbmRouteConfig',
        'database.ctrl': 'src/business/dataMgmtWebsite/controllers/databaseCtrl',
        'i18nService': 'src/business/dataMgmtWebsite/services/i18nService',
        'route': 'src/business/dataMgmtWebsite/routeConfig/route',

        'httpService': 'src/service/httpService',
        // 'i18n':'i18n/'+languageToken+'/',

    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular'],

        },
    },
});
define(['framework', 'i18nService'], function(app, i18nService) {

    var state = {
        session: '666',
        locale: 'zh-CN'
    };
    app.value('session', state.session);
    app.value('locale', state.locale);
    app.service('i18nService', ['$q','locale', i18nService]);
    app.controller('appController', ['$scope', '$state', 'i18nService',
        function($scope, $state,i18nService) {
            $scope.btnOpts = {
                click: function() {
                   
                    i18nService.locale = (i18nService.locale==='zh-CN'?'en-US':'zh-CN');
                    $state.reload($state.current.name);




                }
            };
        }
    ]);
    angular.bootstrap(document, [app.name]);
});