import createFormatCache from 'npm:intl-format-cache';
import Intl from '../utils/intl';
import Formatter from 'ember-format/formatters/base';

export default Formatter.extend({

  _cache: createFormatCache(Intl.DateTimeFormat),

  format: function(input, options) {
    options = this.optionsFor(options);
    var code = this.codeFor(options);

    return this._cache(code, options).format(input);
  }

});
