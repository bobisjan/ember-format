import Ember from 'ember';
import startApp from '../../helpers/start-app';
import formatRelativeHelper from 'ember-format/helpers/format-relative';
import { module, test } from 'qunit';

var set = Ember.set;

var application, view;

module('FormatRelativeHelper', {
  setup: function() {
    application = startApp();
    view = { container: application.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(application, application.destroy);
  }
});

test('it formats relative input', function(assert) {
  assert.ok(formatRelativeHelper.call(view, [Date.now() - (24 * 60 * 60 * 1000)], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function(assert) {
  assert.throws(function() {
    formatRelativeHelper.call(view, [], {}, {});
    formatRelativeHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
