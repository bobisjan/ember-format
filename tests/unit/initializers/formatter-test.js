import Ember from 'ember';
import { initialize } from 'dummy/initializers/formatter';
import { module, test } from 'qunit';

var container, application;

module('FormatterInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.register('service:locale', null, { instantiate: false });
      application.deferReadiness();
    });
  }
});

test('it registers formatters', function(assert) {
  initialize(container, application);

  assert.ok(container.lookup('formatter:date'));
  assert.ok(container.lookup('formatter:message'));
  assert.ok(container.lookup('formatter:number'));
  assert.ok(container.lookup('formatter:relative'));
});
