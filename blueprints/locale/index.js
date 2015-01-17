var cldr = require('cldr');
var fs = require('fs-extra');
var path = require('path');
var Promise = require('ember-cli/lib/ext/promise');
var serialize = require('serialize-javascript');
var SilentError = require('ember-cli/lib/errors/silent');
var writeFile = Promise.denodeify(fs.outputFile);

module.exports = {
  description: 'Generate a locale with CLDR data',

  normalizeEntityName: function(entityName) {
    if (!this.isKnownLocaleCode(entityName)) {
      throw new SilentError('The `ember generate locale` command does not ' +
      'know locale `' + entityName + '`.');
    }

    return this.normalizeLocaleCode(entityName);
  },

  locals: function(options) {
    var locale = this.localeCodeFor(options);

    return {
      locale: locale
    };
  },

  beforeInstall: function(options) {
    var code = this.localeCodeFor(options);
    var relativePath = path.join('app', 'locales', code + '-cldr.js');
    var fullPath = path.join(this.project.root, relativePath);

    var locale = {
      locale: code,
      pluralRuleFunction: this.extractPluralRuleFunction(code),
      fields: this.extractFields(code)
    }

    if (!this.isSupportedLocale(locale)) {
      return Promise.reject(new SilentError("The locale `" + code + "` is not supported."));
    }

    var contents = 'export default ' + serialize(locale) + ';';

    return writeFile(fullPath, contents);
  },

  localeCodeFor: function(options) {
    return this.normalizeLocaleCode(options.entity.name);
  },

  isKnownLocaleCode: function(code) {
    if (!code || code === 'root') {
      return false;
    }

    code = code.replace(/-/g, '_');
    code = code.toLowerCase();

    return cldr.localeIds.indexOf(code) >= 0;
  },

  isSupportedLocale: function(locale) {
    return !!locale.pluralRuleFunction && !!locale.fields
  },

  normalizeLocaleCode: function(code) {
    return code.replace(/_/g, '-');
  },

  /**
    https://github.com/yahoo/grunt-extract-cldr-data/blob/master/lib/extract.js
    Copyright (c) 2014 Yahoo Inc.
    Licensed under the Yahoo BSD license.
  */
  extractPluralRuleFunction: function(locale) {
    var fn = cldr.extractPluralRuleFunction(locale).toString();

    // Remove unnecessary function name.
    fn = fn.replace('function anonymous(', 'function (');

    // ParseInt() is expensive given that we already know the input is a number.
    fn = fn.replace('if(typeof n==="string")n=parseInt(n,10);', 'n=Math.floor(n);');

    // js-hint asi.
    fn = fn.replace('"\n}', '";\n}');
    // js-hint W018 "Confusing use of '!'" caused by stuff like "!(n===11)".
    fn = fn.replace(/!\((\w+)===(\d+)\)/g, '($1!==$2)');
    // js-hint W018 "Confusing use of '!'" caused by stuff like "!(n%100===11)".
    fn = fn.replace(/!\((\w+)%(\d+)===(\d+)\)/g, '($1%$2!==$3)');

    // Keep it neat.
    fn = fn.replace(/\n/g, '');

    // make sure the function
    if (fn === 'function (n) {}') {
      return null;
    }

    /* jshint evil:true */
    eval('fn = ' + fn);
    /* jshint evil:false */
    return fn;
  },

  extractFields: function(locale) {
    return cldr.extractFields(locale);
  }

};
