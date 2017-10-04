define(['dbm.config'], function(dbmConfig) {
    'use strict';
    var databaseCtrl = function($scope, i18n) {
        $scope.text = 'hello dbm';
        $scope.i18n = i18n;
        
    };
    var module = angular.module('dbm.config');
    console.log('database.ctrl');
    module.controller('database.ctrl', ['$scope', 'i18n', databaseCtrl]);
    return module;
});