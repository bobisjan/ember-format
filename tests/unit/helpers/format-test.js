import Ember from "ember";
import startApp from '../../helpers/start-app';
import { format } from 'dummy/helpers/format';

var App, view;

module('FormatHelper', {
  setup: function() {
    App = startApp();
    view = { container: App.__container__ };
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it formats input', function() {
  ok(format.call(view, ['date', new Date()], {}));
  ok(format.call(view, ['message', 'car'], {}));
  ok(format.call(view, ['number', 1], {}));
  ok(format.call(view, ['relative', Date.now() - (24 * 60 * 60 * 1000)], {}));
});

test('it asserts when invalid number of parameters is passed', function() {
  throws(function() {
    format.call(view, [], {});
    format.call(view, ['a'], {});
    format.call(view, ['a', 'b', 'c'], {});
  });
});

test('it asserts when invalid formatter is used', function() {
  throws(function() {
    format.call(view, ['x-number', 1], {});
  });
});
