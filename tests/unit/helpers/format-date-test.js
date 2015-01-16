import Ember from "ember";
import startApp from '../../helpers/start-app';
import formatDateHelper from 'dummy/helpers/format-date';

var set = Ember.set;

var App, view;

module('FormatDateHelper', {
  setup: function() {
    App = startApp();
    view = { container: App.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it formats date input', function() {
  ok(formatDateHelper.call(view, [new Date()], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function() {
  throws(function() {
    formatDateHelper.call(view, [], {}, {});
    formatDateHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
