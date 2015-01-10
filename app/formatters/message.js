import Ember from 'ember';
import Formatter from 'ember-format/formatters/base';
import createFormatCache from 'npm:intl-format-cache';
import IntlMessageFormat from 'npm:intl-messageformat';

var get = Ember.get;

export default Formatter.extend({

  _cache: createFormatCache(IntlMessageFormat),

  format: function(input, options) {
    options = this.optionsFor(options);

    var locale = get(this, 'locale');
    var code = this.codeFor(options);

    var messages = locale.messagesFor(code);
    var formats = locale.formatsFor(code);

    input = get(messages, input);

    return this._cache(input, code, formats).format(options);
  }

});
