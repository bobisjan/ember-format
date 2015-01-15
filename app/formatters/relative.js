import Ember from 'ember';
import Formatter from 'ember-format/formatters/base';
import createFormatCache from 'npm:intl-format-cache';
/* import IntlRelativeFormat from 'npm:intl-relativeformat'; */
/* global IntlRelativeFormat */

var get = Ember.get;

export default Formatter.extend({

  _cache: createFormatCache(IntlRelativeFormat),

  format: function(input, options) {
    options = this.optionsFor(options);

    var code = this.codeFor(options);

    return this._cache(code, options).format(input);
  }

});
