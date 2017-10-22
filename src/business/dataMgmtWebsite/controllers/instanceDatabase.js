'use strict';
var ctrl = function($scope , i18n ) {
    $scope.text = 'hello rdbms';
    $scope.i18n = i18n;
    $scope.instance_database = 'RDBMS';
};
var module = angular.module('dbm.config');
console.log('instanceDatabase.ctrl');
module.controller('instanceDatabase.ctrl', ['$scope',  'i18n', ctrl]);