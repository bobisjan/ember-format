var cldr = require('cldr');
var Task = require('../tasks/format-locales');

module.exports = {
  name: 'format:locales',
  works: 'insideProject', // insideAddon
  description: 'This command is only for add-on development.',

  run: function(commandOptions, rawArgs) {
    var project = this.project;
    var ui      = this.ui;

    var task = new Task({
      project: project,
      ui: ui
    });

    commandOptions.locales = this.findLocales();

    return task.run(commandOptions);
  },

  findLocales: function() {
    var re = new RegExp('_', 'g');

    return cldr.localeIds.map(function(locale) {
      return locale.replace(re, '-');
    }).filter(function(locale) {
      if (locale === 'root') {
        return false;
      }

      var parts = locale.split('-');

      return parts.length === 1;
    });
  }

};
