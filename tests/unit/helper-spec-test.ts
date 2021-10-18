import { module, test } from 'qunit';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';

module('Unit | helper-spec');

test('discovering bindings', function (assert) {
  const config = {
    foo: new Binding('foo'),
    bar: [new Binding('bar[1]'), new Binding('bar[2]')],
    baz: {
      key: new Binding('value'),
      children: [new Binding('a'), new Binding('b')],
    },
  };

  const spec = new HelperSpec(() => {}, config);

  assert.deepEqual(
    spec.bindings.map((binding: Binding) => binding.path.join('')).sort(),
    ['a', 'b', 'bar[1]', 'bar[2]', 'foo', 'value']
  );
});
