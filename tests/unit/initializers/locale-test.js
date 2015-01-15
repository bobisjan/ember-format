import Ember from 'ember';
import { initialize } from 'dummy/initializers/locale';
import Locale from 'dummy/services/locale';
import en from 'dummy/locales/en';
import cldr from 'dummy/locales/en-cldr';

var container, application;

module('LocaleInitializer', {
  setup: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.LOCALE = 'en';
      container = application.__container__;
      container.register('service:locale', Locale);
      container.register('locale:en', en, { instantiate: false });
      container.register('locale:en-cldr', cldr, { instantiate: false });
      application.deferReadiness();
    });
  }
});

test('it sets up locale service', function() {
  initialize(container, application);

  var locale = container.lookup('service:locale');

  ok(locale);
  ok(locale.get('locales'));
  ok(locale.get('formats'));
  ok(locale.get('messages'));
  ok(locale.get('code') === 'en');
});
