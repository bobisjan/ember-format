import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { format } from 'ember-format/helpers/format';
import { module, test } from 'qunit';

var application, view;

module('FormatHelper', {
  setup: function() {
    application = startApp();
    view = { container: application.__container__ };
  },
  teardown: function() {
    Ember.run(application, application.destroy);
  }
});

test('it formats input', function(assert) {
  assert.ok(format.call(view, ['date', new Date()], {}));
  assert.ok(format.call(view, ['message', 'car'], {}));
  assert.ok(format.call(view, ['number', 1], {}));
  assert.ok(format.call(view, ['relative', Date.now() - (24 * 60 * 60 * 1000)], {}));
});

test('it asserts when invalid number of parameters is passed', function(assert) {
  assert.throws(function() {
    format.call(view, [], {});
    format.call(view, ['a'], {});
    format.call(view, ['a', 'b', 'c'], {});
  });
});

test('it asserts when invalid formatter is used', function(assert) {
  assert.throws(function() {
    format.call(view, ['x-number', 1], {});
  });
});
