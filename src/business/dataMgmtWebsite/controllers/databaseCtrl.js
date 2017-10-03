define(['dbm.config'], function(dbmConfig,i18n) {
    'use strict';
    var databaseCtrl = function($scope,i18n) {
    	$scope.text='hello dbm';
        $scope.i18n = i18n;
    };
    var module = angular.module('dbm.config');
    module.controller('database.ctrl', ['$scope', databaseCtrl]);
    return module;
});