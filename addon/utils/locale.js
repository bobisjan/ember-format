import Ember from 'ember';

var get = Ember.get;
var keys = Ember.keys;
var typeOf = Ember.typeOf;

var codes = [
  'af',
  'ak',
  'am',
  'ar',
  'as',
  'asa',
  'ast',
  'az',
  'be',
  'bem',
  'bez',
  'bg',
  'bm',
  'bn',
  'bo',
  'br',
  'brx',
  'bs',
  'ca',
  'cgg',
  'chr',
  'cs',
  'cy',
  'da',
  'de',
  'dz',
  'ee',
  'el',
  'en',
  'eo',
  'es',
  'et',
  'eu',
  'fa',
  'ff',
  'fi',
  'fil',
  'fo',
  'fr',
  'fur',
  'fy',
  'ga',
  'gd',
  'gl',
  'gsw',
  'gu',
  'gv',
  'ha',
  'haw',
  'he',
  'hi',
  'hr',
  'hu',
  'hy',
  'id',
  'ig',
  'ii',
  'is',
  'it',
  'ja',
  'jgo',
  'jmc',
  'ka',
  'kab',
  'kde',
  'kea',
  'kk',
  'kkj',
  'kl',
  'km',
  'kn',
  'ko',
  'ks',
  'ksb',
  'ksh',
  'kw',
  'ky',
  'lag',
  'lg',
  'lkt',
  'ln',
  'lo',
  'lt',
  'lv',
  'mas',
  'mg',
  'mgo',
  'mk',
  'ml',
  'mn',
  'mr',
  'ms',
  'mt',
  'my',
  'naq',
  'nb',
  'nd',
  'ne',
  'nl',
  'nn',
  'nnh',
  'nr',
  'nso',
  'nyn',
  'om',
  'or',
  'os',
  'pa',
  'pl',
  'ps',
  'pt',
  'rm',
  'ro',
  'rof',
  'ru',
  'rwk',
  'sah',
  'saq',
  'se',
  'seh',
  'ses',
  'sg',
  'shi',
  'si',
  'sk',
  'sl',
  'sn',
  'so',
  'sq',
  'sr',
  'ss',
  'ssy',
  'st',
  'sv',
  'sw',
  'ta',
  'te',
  'teo',
  'th',
  'ti',
  'tig',
  'tn',
  'to',
  'tr',
  'ts',
  'tzm',
  'ug',
  'uk',
  'ur',
  'uz',
  've',
  'vi',
  'vo',
  'vun',
  'wae',
  'xh',
  'xog',
  'yo',
  'zh',
  'zu'
];

var locales = {};

for (var i = 0, len = codes.length; i < len; i++) {
  var key = codes[i];

  locales[key] = {
    code: key,
    enabled: false,
    messages: {},
    formats: {}
  };
}

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
