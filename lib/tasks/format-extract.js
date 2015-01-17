'use strict';

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
    var locale = options.locales;

    var relativePath = path.join('addon', 'utils', 'codes.js');
    var fullPath = path.join(project.root, relativePath);
    var contents = 'export default ' + serialize(locales) + ';';

    return writeFile(fullPath, contents);
  }

});
