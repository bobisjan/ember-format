/* jshint node: true */
'use strict';

var commands = require('./lib/commands');
var path = require('path');
var relativeFormatPath = path.dirname(require.resolve('intl-relativeformat'));

module.exports = {
  name: 'ember-format',

  includedCommands: function() {
    return commands;
  },

  included: function (app) {
    app.import('vendor/relativeformat/intl-relativeformat.js');
  },

  treeForVendor: function (tree) {
    var trees = [];

    if (tree) {
      trees.push(tree);
    }

    trees.push(this.pickFiles(this.treeGenerator(relativeFormatPath), {
      srcDir:  '/dist',
      destDir: 'relativeformat'
    }))

    return this.mergeTrees(trees);
  }

};
