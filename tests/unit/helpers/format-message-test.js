import Ember from "ember";
import startApp from '../../helpers/start-app';
import formatMessageHelper from 'dummy/helpers/format-message';

var set = Ember.set;

var App, view;

module('FormatMessageHelper', {
  setup: function() {
    App = startApp();
    view = { container: App.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it formats message input', function() {
  ok(formatMessageHelper.call(view, ['car'], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function() {
  throws(function() {
    formatMessageHelper.call(view, [], {}, {});
    formatMessageHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
