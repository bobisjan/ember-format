var serialize = require('serialize-javascript');

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
    var data = require('./data/' + locale);
    var path = ['app', 'locales', locale + '-cldr.js'].join('/');
    var contents = 'export default ' + serialize(data) + ';';

    return this.insertIntoFile(path, contents);
  }
};
