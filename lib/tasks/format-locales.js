'use strict';

var chalk = require('chalk');
var path = require('path');
var fs = require('fs-extra');
var Promise = require('ember-cli/lib/ext/promise');
var Task = require('ember-cli/lib/models/task');
var serialize = require('serialize-javascript');

var writeFile = Promise.denodeify(fs.outputFile);

module.exports = Task.extend({

  run: function(options) {
    var ui = this.ui;
    var displayPath = this.displayPath();
    var fullPath = path.join(this.project.root, displayPath);
    var content = this.contentFor(options.locales);

    return writeFile(fullPath, content).then(function() {
      ui.writeLine('  ' + chalk.green('create') + ' ' + displayPath);
    });
  },

  contentFor: function(locales) {
    var data = {};

    locales.forEach(function(locale) {
      data[locale] = this.hashFor(locale);
    }, this);

    return 'export default ' + serialize(data) + ';';
  },

  hashFor: function(locale) {
    return {
      code: locale,
      enabled: false,
      messages: {},
      formats: {}
    };
  },

  displayPath: function() {
    return path.join('addon', 'utils', 'locales.js');
  }

});
