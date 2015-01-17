'use strict';

var fs = require('fs-extra');
var Promise = require('ember-cli/lib/ext/promise');
var Task = require('ember-cli/lib/models/task');
var path = require('path');
var serialize = require('serialize-javascript');
var writeFile = Promise.denodeify(fs.outputFile);

module.exports = Task.extend({
  run: function(options) {
    var project = this.project;
    var ui = this.ui;
    var locales = options.locales;
    var relativePath = ['addon', 'utils', 'codes.js'].join('/');
    var fullPath = path.join(project.root, relativePath);
    var contents = 'export default ' + serialize(locales) + ';';

    return writeFile(fullPath, contents).then(function() {
      ui.writeLine("Extracted " + locales.length + " locales");
    });
  }
});
