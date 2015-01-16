import Ember from "ember";
import startApp from '../../helpers/start-app';
import formatNumberHelper from 'dummy/helpers/format-number';

var set = Ember.set;

var App, view;

module('FormatNumberHelper', {
  setup: function() {
    App = startApp();
    view = { container: App.__container__ };
    set(view, 'locale', view.container.lookup('service:locale'));
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it formats number input', function() {
  ok(formatNumberHelper.call(view, [123456789], {}, {}, {}));
});

test('it asserts when invalid number of parameters is passed', function() {
  throws(function() {
    formatNumberHelper.call(view, [], {}, {});
    formatNumberHelper.call(view, ['a', 'b', 'c'], {}, {});
  });
});
