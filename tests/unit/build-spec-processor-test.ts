import { module, test } from 'qunit';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Binding from 'ember-exclaim/-private/binding';
import ComponentSpec from 'ember-exclaim/-private/component-spec';
import HelperSpec from 'ember-exclaim/-private/helper-spec';

module('Unit | build-spec-processor', function () {
  test('processing valid config', function (assert) {
    const implementationMap = { foo: { componentPath: 'components/foo' } };
    const processor = buildSpecProcessor({ implementationMap });
    const input = {
      $component: 'foo',
      value: {
        $bind: 'bar',
      },
    };

    const result = processor(input);
    assert.deepEqual(
      result,
      new ComponentSpec('components/foo', { value: new Binding('bar') })
    );
  });

  test('processing an empty binding', function (assert) {
    const implementationMap = {};
    const processor = buildSpecProcessor({ implementationMap });
    const input = {
      $component: 'foo',
      value: {
        $bind: '',
      },
    };

    assert.throws(() => processor(input), 'Invalid binding: ""');
  });

  test('processing a component with shorthand', function (assert) {
    const implementationMap = {
      foo: {
        componentPath: 'components/foo',
        shorthandProperty: 'value',
      },
    };

    const processor = buildSpecProcessor({ implementationMap });
    const input = { $foo: { $bind: 'bar' } };

    const result = processor(input);
    assert.deepEqual(
      result,
      new ComponentSpec('components/foo', { value: new Binding('bar') })
    );
  });

  test('processing a component with meta', function (assert) {
    const implementationMap = {
      foo: {
        componentPath: 'components/foo',
        componentMeta: {
          available: true,
        },
      },
    };

    const processor = buildSpecProcessor({ implementationMap });
    const input = {
      $component: 'foo',
      value: {
        $bind: 'bar',
      },
    };
    const result = processor(input);
    assert.deepEqual(
      result,
      new ComponentSpec(
        'components/foo',
        { value: new Binding('bar') },
        { available: true }
      )
    );
  });

  test('processing a helper with shorthand', function (assert) {
    const helper = () => undefined;
    const implementationMap = {
      foo: {
        helper,
        shorthandProperty: 'value',
      },
    };

    const processor = buildSpecProcessor({ implementationMap });
    const input = { $foo: { $bind: 'bar' } };

    const result = processor(input);
    assert.deepEqual(
      result,
      new HelperSpec(helper, { value: new Binding('bar') })
    );
  });

  test('processing a helper with meta', function (assert) {
    const helper = () => undefined;
    const implementationMap = {
      foo: {
        helper,
        helperMeta: {
          available: true,
        },
      },
    };

    const processor = buildSpecProcessor({ implementationMap });
    const input = {
      $helper: 'foo',
      value: {
        $bind: 'bar',
      },
    };
    const result = processor(input);
    assert.deepEqual(
      result,
      new HelperSpec(helper, { value: new Binding('bar') }, { available: true })
    );
  });
});
