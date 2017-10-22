'use strict';
var languageToken = 'zh-CN';


const app = require('src/framework/framework');
const i18nService = require('src/business/dataMgmtWebsite/services/i18nService');
var state = {
    session: '666',
    locale: 'zh-CN'
};
app.value('session', state.session);
app.value('locale', state.locale);
app.service('i18nService', ['$q', 'locale', i18nService]);
app.controller('appController', ['$scope', '$state', 'i18nService',
    function($scope, $state, i18nService) {
        $scope.btnOpts = {
            click: function() {
                i18nService.locale = (i18nService.locale === 'zh-CN' ? 'en-US' : 'zh-CN');
                $state.reload();
                // $rootScope.$apply();
            }
        };
    }
]);
angular.bootstrap(document, [app.name]);