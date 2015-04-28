import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:locale', 'LocaleService');

test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('it streams itself', function(assert) {
  assert.expect(4);

  var service = this.subject();
  var stream = service.get('stream');

  service.set('code', 'en');

  stream.subscribe(function() {
    assert.ok(stream.value() === service);
    assert.ok(stream.value().get('code') === 'cs');
  });

  service.set('code', 'cs');
  assert.ok(stream.value() === service);
  assert.ok(stream.value().get('code') === 'cs');
});
