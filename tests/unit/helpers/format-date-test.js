import Ember from 'ember';
import startApp from '../../helpers/start-app';
import formatDateHelper from 'ember-format/helpers/format-date';
import { module, test } from 'qunit';

var set = Ember.set;

var application, view;

module('FormatDateHelper', {
  setup: function() {
    application = startApp();
    view = { container: application.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(application, application.destroy);
  }
});

test('it formats date input', function(assert) {
  assert.ok(formatDateHelper.call(view, [new Date()], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function(assert) {
  assert.throws(function() {
    formatDateHelper.call(view, [], {}, {});
    formatDateHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
