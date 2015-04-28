import Ember from 'ember';
import startApp from '../../helpers/start-app';
import formatNumberHelper from 'ember-format/helpers/format-number';
import { module, test } from 'qunit';

var set = Ember.set;

var application, view;

module('FormatNumberHelper', {
  setup: function() {
    application = startApp();
    view = { container: application.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(application, application.destroy);
  }
});

test('it formats number input', function(assert) {
  assert.ok(formatNumberHelper.call(view, [123456789], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function(assert) {
  assert.throws(function() {
    formatNumberHelper.call(view, [], {}, {});
    formatNumberHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
