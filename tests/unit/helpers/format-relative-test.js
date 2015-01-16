import Ember from "ember";
import startApp from '../../helpers/start-app';
import formatRelativeHelper from 'dummy/helpers/format-relative';

var set = Ember.set;

var App, view;

module('FormatRelativeHelper', {
  setup: function() {
    App = startApp();
    view = { container: App.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it formats relative input', function() {
  ok(formatRelativeHelper.call(view, [Date.now() - (24 * 60 * 60 * 1000)], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function() {
  throws(function() {
    formatRelativeHelper.call(view, [], {}, {});
    formatRelativeHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
