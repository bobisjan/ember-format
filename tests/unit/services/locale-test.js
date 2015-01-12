import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:locale', 'LocaleService');

test('it exists', function() {
  var service = this.subject();
  ok(service);
});

test('it streams itself', function() {
  expect(4);

  var service = this.subject();
  var stream = service.get('stream');

  service.set('code', 'en');

  stream.subscribe(function() {
    ok(stream.value() === service);
    ok(stream.value().get('code') === 'cs');
  });

  service.set('code', 'cs');
  ok(stream.value() === service);
  ok(stream.value().get('code') === 'cs');
});
