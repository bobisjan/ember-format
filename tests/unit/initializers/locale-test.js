import Ember from 'ember';
import { initialize } from 'dummy/initializers/locale';
import Locale from 'dummy/services/locale';
import en from 'dummy/locales/en';
import cldr from 'dummy/locales/en-cldr';
import { module, test } from 'qunit';

var container, application;

module('LocaleInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.LOCALE = 'en';
      container = application.__container__;
      application.register('service:locale', Locale);
      application.register('locale:en', en, { instantiate: false });
      application.register('locale:en-cldr', cldr, { instantiate: false });
      application.deferReadiness();
    });
  }
});

test('it sets up locale service', function(assert) {
  initialize(container, application);

  var locale = container.lookup('service:locale');

  assert.ok(locale);
  assert.ok(locale.get('locales'));
  assert.ok(locale.get('formats'));
  assert.ok(locale.get('messages'));
  assert.ok(locale.get('code') === 'en');
});
