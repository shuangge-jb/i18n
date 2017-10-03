define(['angular','framework'],function(angular){
	'use strict';
	var httpService=function($scope){

	};
	var module=angular.module('framework');
	module.service('httpService',['$scope',httpService]);
	return module;
});