/* jshint node: true */
'use strict';

var commands = require('./lib/commands');

module.exports = {
  name: 'ember-format',

  includedCommands: function() {
    return commands;
  }
};
