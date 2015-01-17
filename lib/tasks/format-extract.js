'use strict';

var cldr = require('cldr');
var fs = require('fs-extra');
var Promise = require('ember-cli/lib/ext/promise');
var Task = require('ember-cli/lib/models/task');
var path = require('path');
var serialize = require('serialize-javascript');
var writeFile = Promise.denodeify(fs.outputFile);

module.exports = Task.extend({

  run: function(options) {
    var that = this;
    var project = this.project;
    var ui = this.ui;
    var locales = [];

    var data = options.locales.map(function(locale) {
      return {
        locale: locale,
        pluralRuleFunction: that.extractPluralRuleFunction(locale),
        fields: that.extractFields(locale)
      };
    }).filter(function(locale) {
      var include = !!locale.pluralRuleFunction && !!locale.fields;

      if (include) {
        locales.push(locale.locale);
      }
      return include;
    });

    var promises = data.map(function(item) {
      var dataRelativePath = path.join('blueprints', 'locale', 'data', item.locale + '.js');
      var dataFullPath = path.join(project.root, dataRelativePath);
      var dataContents = '\'use strict;\'\nmodule.exports = ' + serialize(item) + ';';

      return writeFile(dataFullPath, dataContents);
    });

    return Promise.all(promises).then(function() {
      var relativePath = path.join('addon', 'utils', 'codes.js');
      var fullPath = path.join(project.root, relativePath);
      var contents = 'export default ' + serialize(locales) + ';';

      return writeFile(fullPath, contents).then(function() {
        ui.writeLine("Extracted " + locales.length + " locales");
      });
    });
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

});
