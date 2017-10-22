'use strict';
require('src/business/dataMgmtWebsite/routeConfig/dbmRouteConfig');

var dependency = ['dbm.config'];
var framework = angular.module('framework', dependency);
module.exports=framework;