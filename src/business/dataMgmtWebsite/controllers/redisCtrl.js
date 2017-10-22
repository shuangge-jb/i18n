'use strict';
var ctrl = function($scope , i18n ) {
    $scope.text = 'hello redis';
    $scope.i18n = i18n;
    $scope.instance_database = 'Redis';
};
var module = angular.module('dbm.config');
console.log('redis.ctrl');
module.controller('redis.ctrl', ['$scope',  'i18n', ctrl]);