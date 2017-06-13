import { module, test } from 'qunit';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Binding from 'ember-exclaim/-private/binding';
import ComponentSpec from 'ember-exclaim/-private/component-spec';

module('Unit | build-spec-processor');

test('processing valid config', function(assert) {
  let processor = buildSpecProcessor({ bindKey: 'bind', componentKey: 'component' });
  let resolveComponent = name => `components/${name}`;
  let owner = { hasRegistration: () => true };
  let input = {
    component: 'foo',
    value: {
      bind: 'bar'
    }
  };

  let result = processor(input, { owner, resolveComponent });
  assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }));
});

test('processing a missing component', function(assert) {
  let processor = buildSpecProcessor({ bindKey: 'bind', componentKey: 'component' });
  let resolveComponent = name => `components/${name}`;
  let owner = { hasRegistration: () => false };
  let input = { component: 'foo' };

  assert.throws(() => {
    processor(input, { owner, resolveComponent });
  }, 'Unable to resolve component foo');
});

test('processing an empty binding', function(assert) {
  let processor = buildSpecProcessor({ bindKey: 'bind', componentKey: 'component' });
  let resolveComponent = name => `components/${name}`;
  let owner = { hasRegistration: () => true };
  let input = {
    component: 'foo',
    value: {
      bind: ''
    }
  };

  assert.throws(() => {
    processor(input, { owner, resolveComponent });
  }, 'Invalid binding: ""');
});
