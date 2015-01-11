import Ember from 'ember';
import Stream from 'ember-format/utils/stream';
import { scanArray, scanHash, readArray, readHash, subscribe } from 'ember-format/utils/stream';

var get = Ember.get;

var _format = function _format(format, input, options) {
  var formatter = this.container.lookup('formatter:' + format);

  Ember.assert('You specified `' + format +  '` in your template, but a formatter for `' + format + '` could not be found.', !!formatter);

  return formatter.format(input, options);
};

export default function format(params, hash, options, env) {
  var view = this;
  var numParams = params.length;
  var param, prop;

  Ember.assert("makeBoundHelper generated helpers do not support use with blocks", !options.template);

  function valueFn() {
    var _params = readArray(params);
    return _format.call(view, _params[0], _params[1], readHash(hash));
  }

  var hasStream = scanArray(params) || scanHash(hash);

  var localeStream = get(this, 'locale.stream');
  var lazyValue = new Stream(valueFn);

  localeStream.subscribe(lazyValue.notify, lazyValue);

  if (hasStream) {
    for (var i = 0; i < numParams; i++) {
      param = params[i];
      subscribe(param, lazyValue.notify, lazyValue);
    }

    for (prop in hash) {
      param = hash[prop];
      subscribe(param, lazyValue.notify, lazyValue);
    }
  }

  return lazyValue;
}
