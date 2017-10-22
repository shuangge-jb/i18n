'use strict';
var service = function($q, locale) {
    this.locale = locale;
    this.get = function(locale, name) {
        if (locale === 'zh-CN') {
           return new Promise((resolve, reject) => {
              return  require.ensure([], function(require) {
                    let template = require('i18n/zh-CN/business');
                    resolve(template);
                }, () => {}, 'i18n.zh-CN');
            });
        }
        if (locale === 'en-US') {
           return new Promise((resolve, reject) => {
                return require.ensure([], function(require) {
                    let template = require('i18n/en-US/business');
                    resolve(template);
                }, () => {}, 'i18n.en-US');
            });
        }



    };
};
module.exports = service;