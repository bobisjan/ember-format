import Ember from 'ember';

var get = Ember.get;
var merge = Ember.merge;
var required = Ember.required;

export default Ember.Object.extend({

  codeFor: function(options) {
    var code = get(this, 'locale.code');

    if (options.locale) {
      code = options.locale;
      delete options.locale;
    }
    return code;
  },

  optionsFor: function(options) {
    options = options || {};

    if (options.options) {
      merge(options, options.options);
      delete options.options;
    }
    return options;
  },

  format: required(Function)

});
