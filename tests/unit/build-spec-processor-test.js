import { module, test } from 'qunit';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Binding from 'ember-exclaim/-private/binding';
import ComponentSpec from 'ember-exclaim/-private/component-spec';
import HelperSpec from 'ember-exclaim/-private/helper-spec';

module('Unit | build-spec-processor');

test('processing valid config', function(assert) {
  let implementationMap = {
    foo: { componentPath: 'components/foo' },
    baz: { helper: true }
  };

  let processor = buildSpecProcessor({ implementationMap });
  let input = {
    $component: 'foo',
    value: {
      $bind: 'bar'
    },
    other: {
      $helper: 'baz',
      key: 'value'
    }
  };

  let result = processor(input);
  assert.deepEqual(result, new ComponentSpec('components/foo', {
    value: new Binding('bar'),
    other: new HelperSpec(true, { key: 'value' })
  }));
});

test('processing an empty binding', function(assert) {
  let implementationMap = {};
  let processor = buildSpecProcessor({ implementationMap });
  let input = {
    $component: 'foo',
    value: {
      $bind: ''
    }
  };

  assert.throws(() => processor(input), 'Invalid binding: ""');
});

test('processing a component with shorthand', function(assert) {
  let implementationMap = {
    foo: {
      componentPath: 'components/foo',
      shorthandProperty: 'value',
    },
  };

  let processor = buildSpecProcessor({ implementationMap });
  let input = { $foo: { $bind: 'bar' } };

  let result = processor(input);
  assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }));
});

test('processing a component with meta', function(assert) {
  let implementationMap = {
    foo: {
      componentPath: 'components/foo',
      componentMeta: {
        available: true,
      },
    },
  };

  let processor = buildSpecProcessor({ implementationMap });
  let input = {
    $component: 'foo',
    value: {
      $bind: 'bar'
    }
  };
  let result = processor(input);
  assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }, { available: true }));
});

test('processing a helper with shorthand', function(assert) {
  let helper = () => {};
  let implementationMap = {
    foo: {
      helper,
      shorthandProperty: 'value',
    }
  };

  let processor = buildSpecProcessor({ implementationMap });
  let input = { $foo: { $bind: 'bar' } };

  let result = processor(input);
  assert.deepEqual(result, new HelperSpec(helper, { value: new Binding('bar') }));
});

test('processing a component with meta', function(assert) {
  let helper = () => {};
  let implementationMap = {
    foo: {
      helper,
      helperMeta: {
        available: true,
      },
    },
  };

  let processor = buildSpecProcessor({ implementationMap });
  let input = {
    $helper: 'foo',
    value: {
      $bind: 'bar'
    }
  };
  let result = processor(input);
  assert.deepEqual(result, new HelperSpec(helper, { value: new Binding('bar') }, { available: true }));
});
