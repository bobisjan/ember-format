import Ember from 'ember';
import { initialize } from 'dummy/initializers/helper';
import { module, skip } from 'qunit';

var container, application;

module('HelperInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

skip('it registers format helper', function(assert) {
  initialize(container, application);

  assert.ok(Ember.HTMLBars.helpers['format']);
});
