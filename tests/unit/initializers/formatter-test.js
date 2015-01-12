import Ember from 'ember';
import { initialize } from 'dummy/initializers/formatter';

var container, application;

module('FormatterInitializer', {
  setup: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.register('service:locale', null, { instantiate: false });
      application.deferReadiness();
    });
  }
});

test('it registers formatters', function() {
  initialize(container, application);

  ok(container.lookup('formatter:date'));
  ok(container.lookup('formatter:message'));
  ok(container.lookup('formatter:number'));
  ok(container.lookup('formatter:relative'));
});
