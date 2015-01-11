# Ember Format [![Build Status](https://travis-ci.org/bobisjan/ember-format.svg?branch=master)](https://travis-ci.org/bobisjan/ember-format) [![npm version](https://badge.fury.io/js/ember-format.svg)](http://badge.fury.io/js/ember-format)

**[WIP] Ember Format requires Ember 1.10.0 (in beta)**

`Ember Format` allows developers to internationalize their ambitious applications.

The formatting capabilities rely on the set of [Format.js](http://formatjs.io/)'s core libraries and `Intl`'s formatting objects:

* [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat),
* [Intl MessageFormat](https://github.com/yahoo/intl-messageformat),
* [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat),
* [Intl RelativeFormat](https://github.com/yahoo/intl-relativeformat).

These APIs are built on the following industry standards:

* [ECMAScript Internationalization API](http://www.ecma-international.org/ecma-402/1.0/),
* [Unicode CLDR](http://cldr.unicode.org/),
* [ICU Message syntax](http://userguide.icu-project.org/formatparse/messages).

## Installation

Install from the project's folder.

```sh
$ ember install:addon ember-format
```

Generate application's default locale with CLDR data (and any [other](https://github.com/bobisjan/ember-format/blob/master/addon/utils/locale.js#L7)).

```sh
$ ember generate locale en
```

Register default locale in the configuration file.

```js
// config/environment.js
APP: {
  LOCALE: 'en'
}
```

## Usage

* visit `dummy` application in this [repository](https://github.com/bobisjan/ember-format/tree/master/tests/dummy)

## Contribution

* visit [CONTRIBUTING.md](https://github.com/bobisjan/ember-format/blob/master/CONTRIBUTING.md)

## License

Ember Format is available under the MIT license. See the LICENSE file for more info.
