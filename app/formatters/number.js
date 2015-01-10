import Formatter from 'ember-format/formatters/base';
import createFormatCache from 'npm:intl-format-cache';
import Intl from '../utils/intl';

export default Formatter.extend({

  _cache: createFormatCache(Intl.NumberFormat),

  format: function(input, options) {
    options = this.optionsFor(options);
    var code = this.codeFor(options);

    return this._cache(code, options).format(input);
  }

});
