import Intl from 'dummy/utils/intl';

module('Intl');

test('it creates DateTimeFormat instances', function() {
  var instance = new Intl.DateTimeFormat();

  ok(instance);
  ok(instance.format);
});

test('it creates NumberFormat instances', function() {
  var instance = new Intl.DateTimeFormat();

  ok(instance);
  ok(instance.format);
});
