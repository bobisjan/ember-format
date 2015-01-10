import Ember from 'ember';
import { locales, optionsFor, setup } from 'ember-format/utils/locale';
import IntlMessageFormat from 'npm:intl-messageformat';
import IntlRelativeFormat from 'npm:intl-relativeformat';

var get = Ember.get;
var set = Ember.set;

export function initialize(container, application) {
  var locale = container.lookup('service:locale');
  var options = get(application, 'LOCALE');
  var formats = {
    message: IntlMessageFormat,
    relative: IntlRelativeFormat
  };

  options = optionsFor(options);
  set(locale, 'code', options.base);
  set(locale, 'locales', options.locales);

  setup(application.__container__, locale, formats);

  application.inject('application', 'locale', 'service:locale');
  application.inject('route', 'locale', 'service:locale');
  application.inject('controller', 'locale', 'service:locale');
  application.inject('component', 'locale', 'service:locale');
  application.inject('view', 'locale', 'service:locale');
}

export default {
  name: 'locale',
  initialize: initialize
};
