var cldr = require('cldr');
var fs = require('fs-extra');
var path = require('path');
var Promise = require('ember-cli/lib/ext/promise');
var serialize = require('serialize-javascript');
var writeFile = Promise.denodeify(fs.outputFile);

module.exports = {
  description: 'Generate a locale',

  localeFor: function(options) {
    return options.entity.name;
  },

  locals: function(options) {
    var locale = this.localeFor(options);

    return {
      locale: locale
    };
  },

  afterInstall: function(options) {
    var locale = this.localeFor(options);
    var relativePath = path.join('app', 'locales', locale + '-cldr.js');
    var fullPath = path.join(this.project.root, relativePath);
    var data = {
      locale: locale,
      pluralRuleFunction: this.extractPluralRuleFunction(locale),
      fields: this.extractFields(locale)
    }
    var contents = 'export default ' + serialize(data) + ';';

    return writeFile(fullPath, contents);
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
