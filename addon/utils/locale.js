import Ember from 'ember';
import locales from './locales';

var get = Ember.get;
var keys = Ember.keys;
var typeOf = Ember.typeOf;

export function optionsFor(options) {
  if (typeOf(options) === 'string') {
    options = {
      base: options
    };
  }

  Ember.assert('You have to specify a default locale for the application.', options && options.base);

  if (!options.locales) {
    options.locales = locales;
  }

  locales.toArray = function() {
    var keys = [];

    for (var prop in this) {
      if (hasOwnProperty.call(this, prop) && prop !== 'toArray') {
        keys.push(prop);
      }
    }

    return keys.map(function(item) {
      return this[item];
    }, this);
  };

  return options;
}

export function setup(container, locale, formats) {
  var locales = get(locale, 'locales');

  var _keys = keys(locales);
  var _key, _locale, _cldr, _data;

  for (var i = 0, len = _keys.length; i < len; i++) {
    _key = _keys[i];
    _locale = locales[_key];
    _cldr = container.resolve('locale:' + _key + '-cldr');
    _data = container.resolve('locale:' + _key);

    if (!_cldr || !_data) {
      _locale.enabled = false;
      _locale.cldr = null;
      _locale.messages = null;
      _locale.formats = null;
      continue;
    }

    formats.message.__addLocaleData(_cldr);
    formats.relative.__addLocaleData(_cldr);

    _locale.enabled = true;
    _locale.cldr = _cldr;
    _locale.messages = _data.messages;
    _locale.formats = _data.formats;
  }
}

export default locales;
