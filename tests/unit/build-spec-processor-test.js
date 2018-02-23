import { module, test } from 'qunit';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Binding from 'ember-exclaim/-private/binding';
import ComponentSpec from 'ember-exclaim/-private/component-spec';

module('Unit | build-spec-processor', function() {
  test('processing valid config', function(assert) {
    let componentMap = { foo: { componentPath: 'components/foo' } };
    let processor = buildSpecProcessor({ componentMap });
    let input = {
      $component: 'foo',
      value: {
        $bind: 'bar'
      }
    };

    let result = processor(input);
    assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }));
  });

  test('processing an empty binding', function(assert) {
    let componentMap = {};
    let processor = buildSpecProcessor({ componentMap });
    let input = {
      $component: 'foo',
      value: {
        $bind: ''
      }
    };

    assert.throws(() => processor(input), 'Invalid binding: ""');
  });

  test('processing a component with shorthand', function(assert) {
    let componentMap = {
      foo: {
        componentPath: 'components/foo',
        shorthandProperty: 'value',
      },
    };

    let processor = buildSpecProcessor({ componentMap });
    let input = { $foo: { $bind: 'bar' } };

    let result = processor(input);
    assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }));
  });

  test('processing a component with meta', function(assert) {
    let componentMap = {
      foo: {
        componentPath: 'components/foo',
        componentMeta: {
          available: true,
        },
      },
    };

    let processor = buildSpecProcessor({ componentMap });
    let input = {
      $component: 'foo',
      value: {
        $bind: 'bar'
      }
    };
    let result = processor(input);
    assert.deepEqual(result, new ComponentSpec('components/foo', { value: new Binding('bar') }, { available: true }));
  });
});