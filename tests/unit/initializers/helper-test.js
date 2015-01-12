import Ember from 'ember';
import { initialize } from 'dummy/initializers/helper';

var container, application;

module('HelperInitializer', {
  setup: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

test('it registers format helper', function() {
  initialize(container, application);

  ok(Ember.HTMLBars.helpers['format']);
});
