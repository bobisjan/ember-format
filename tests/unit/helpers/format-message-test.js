import Ember from 'ember';
import startApp from '../../helpers/start-app';
import formatMessageHelper from 'ember-format/helpers/format-message';
import { module, test } from 'qunit';

var set = Ember.set;

var application, view;

module('FormatMessageHelper', {
  setup: function() {
    application = startApp();
    view = { container: application.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(application, application.destroy);
  }
});

test('it formats message input', function(assert) {
  assert.ok(formatMessageHelper.call(view, ['car'], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function(assert) {
  assert.throws(function() {
    formatMessageHelper.call(view, [], {}, {});
    formatMessageHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
