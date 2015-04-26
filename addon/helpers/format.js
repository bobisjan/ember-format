import Ember from 'ember';
import Stream from 'ember-format/utils/stream';
import { scanArray, scanHash, readArray, readHash, subscribe } from 'ember-format/utils/stream';

var get = Ember.get;

export function format(params, hash/*, options, env*/) {
  Ember.assert('You passed `' + params.length + '` parameters in your template, but just formatter and input are required.', params.length === 2);

  var type = params[0];
  var input = params[1];

  var formatter = this.container.lookup('formatter:' + type);

  Ember.assert('You specified `' + type +  '` in your template, but a formatter for `' + type + '` could not be found.', !!formatter);

  return formatter.format(input, hash);
}

// Find a better way to define bound helper with custom stream,
// not just copying from Ember's makeBoundHelper.
export default function formatHelper(params, hash, options, env) {
  var view = this || env.data.view;
  var numParams = params.length;
  var param, prop;

  Ember.assert("makeBoundHelper generated helpers do not support use with blocks", !options.template);

  function valueFn() {
    return format.call(view, readArray(params), readHash(hash), options, env);
  }

  var localeStream = get(view, 'locale.stream');
  var lazyValue = new Stream(valueFn);

  localeStream.subscribe(lazyValue.notify, lazyValue);

  var hasStream = scanArray(params) || scanHash(hash);

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
