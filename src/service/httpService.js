define([], function() {
    'use strict';
    var httpService = function(locale) {
        this.locale = locale;
    };
    return httpService;
});