import Intl from 'dummy/utils/intl';
import { module, test } from 'qunit';

module('Intl');

test('it creates DateTimeFormat instances', function(assert) {
  var instance = new Intl.DateTimeFormat();

  assert.ok(instance);
  assert.ok(instance.format);
});

test('it creates NumberFormat instances', function(assert) {
  var instance = new Intl.DateTimeFormat();

  assert.ok(instance);
  assert.ok(instance.format);
});
