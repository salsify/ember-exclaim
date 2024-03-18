import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { A } from '@ember/array';
import { set } from '@ember/object';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { htmlSafe } from '@ember/template';
import { setupRenderingTest } from 'ember-qunit';
import { resolveEnvPath } from 'ember-exclaim';

module('Integration | environment | computed', function (hooks) {
  setupRenderingTest(hooks);

  function exclaimTest(name, { ui, env, implementationMap }) {
    // eslint-disable-next-line qunit/require-expect
    test(name, async function (assert) {
      let deferred = {};
      deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
      });

      this.env = env;
      this.ui = ui;
      this.implementationMap = {
        let: {
          shorthandProperty: 'bindings',
          componentPath: setComponentTemplate(
            hbs`{{yield @config.in @config.bindings}}`,
            class extends Component {},
          ),
        },
        validate: {
          shorthandProperty: 'callback',
          componentPath: class extends Component {
            constructor(owner, args) {
              super(owner, args);
              setTimeout(() =>
                this.runCallback().then(deferred.resolve, deferred.reject),
              );
            }

            async runCallback() {
              return this.args.config.callback.call(this.args, assert);
            }
          },
        },
        ...implementationMap,
      };

      await render(hbs`
        <ExclaimUi
          @ui={{this.ui}}
          @env={{this.env}}
          @implementationMap={{this.implementationMap}}
          @useClassicReactivity={{true}}
        />
      `);

      await deferred.promise;
    });
  }

  exclaimTest('simple lookups', {
    env: { foo: 'bar' },
    ui: {
      async $validate(assert) {
        assert.strictEqual(this.env.foo, 'bar');

        set(this.env, 'foo', 'baz');
        assert.strictEqual(this.env.foo, 'baz');
      },
    },
  });

  exclaimTest('simple array lookups', {
    env: { foo: ['bar', 'baz'] },
    ui: {
      async $validate(assert) {
        assert.strictEqual(this.env.foo[0], 'bar');
        assert.strictEqual(this.env.foo[1], 'baz');
      },
    },
  });

  exclaimTest('set unknown property', {
    env: { foo: ['bar'] },
    ui: {
      async $validate(assert) {
        set(this.env, 'baz', 'bax');
        assert.strictEqual(this.env.baz, 'bax');
        assert.strictEqual(this.env.foo.length, 1);
        set(this.env, 'foo.3', 'qux');
        assert.strictEqual(this.env.foo[3], 'qux');
        assert.strictEqual(this.env.foo.length, 4);
      },
    },
  });

  exclaimTest('array mutation', {
    env: { foo: ['bar', 'baz'] },
    ui: {
      bound: { $bind: 'foo' },
      async $validate(assert) {
        set(this.env, 'foo.1', 'oops');
        assert.strictEqual(this.config.bound[1], 'oops');
        assert.strictEqual(this.env.foo[1], 'oops');
        set(this.config.bound, '0', 'oops again');
        assert.strictEqual(this.env.foo[0], 'oops again');
      },
    },
  });

  exclaimTest('HTML-safe strings', {
    env: { foo: htmlSafe('hello') },
    ui: {
      async $validate(assert) {
        assert.deepEqual(this.env.foo, htmlSafe('hello'));
      },
    },
  });

  exclaimTest('simple binding resolution', {
    env: { foo: 'bar' },
    ui: {
      baz: { $bind: 'foo' },
      async $validate(assert) {
        assert.strictEqual(this.config.baz, 'bar');

        set(this.env, 'foo', 'qux');
        assert.strictEqual(this.config.baz, 'qux');

        set(this.config, 'baz', 'fizz');
        assert.strictEqual(this.env.foo, 'fizz');
      },
    },
  });

  exclaimTest('complex binding resolution', {
    env: { x: { y: 'foo', z: 'bar' } },
    ui: {
      other: { $bind: 'x' },
      stillMore: { $bind: 'x.z' },
      $validate(assert) {
        assert.strictEqual(this.config.stillMore, 'bar');
        assert.strictEqual(resolveEnvPath(this.env, 'x.y'), 'x.y');
        assert.strictEqual(resolveEnvPath(this.config, 'other'), 'x');
        assert.strictEqual(resolveEnvPath(this.config, 'stillMore'), 'x.z');

        set(this.env, 'x.z', 123);
        assert.strictEqual(this.config.other.z, 123);
        assert.strictEqual(this.config.stillMore, 123);

        set(this.config, 'other.z', 234);
        assert.strictEqual(this.config.other.z, 234);
        assert.strictEqual(this.config.stillMore, 234);

        set(this.config, 'stillMore', 345);
        assert.strictEqual(this.config.other.z, 345);
        assert.strictEqual(this.config.stillMore, 345);
      },
    },
  });

  exclaimTest('value reference resolution', {
    env: { foo: 'bar' },
    ui: {
      value: { key: { $bind: 'foo' } },
      async $validate(assert) {
        const value = this.config.value;
        assert.strictEqual(value.key, 'bar');
        assert.strictEqual(resolveEnvPath(value, 'key'), 'foo');

        set(value, 'key', 'ok');
        assert.strictEqual(this.env.foo, 'ok');
      },
    },
  });

  exclaimTest('chained reference resolution', {
    env: { foo: 'bar' },
    ui: {
      value: { key: { child: { $bind: 'foo' } } },
      async $validate(assert) {
        const value = this.config.value;
        const subvalue = value.key;
        assert.strictEqual(subvalue.child, 'bar');

        assert.strictEqual(resolveEnvPath(value, 'key'), undefined);
        assert.strictEqual(resolveEnvPath(value, 'key.child'), 'foo');
        assert.strictEqual(resolveEnvPath(subvalue, 'child'), 'foo');

        set(subvalue, 'child', 321);
        assert.strictEqual(value.key.child, 321);
        assert.strictEqual(this.env.foo, 321);

        set(this.env, 'foo', 999);
        assert.strictEqual(subvalue.child, 999);
      },
    },
  });

  exclaimTest('array values', {
    env: { array: A([1, 2, 3]) },
    ui: {
      ref: { array: { $bind: 'array' } },
      async $validate(assert) {
        const ref = this.config.ref;
        assert.deepEqual(this.env.array, [1, 2, 3]);
        assert.deepEqual(ref.array, [1, 2, 3]);

        const envArray = this.env.array;
        const refArray = ref.array;
        assert.strictEqual(envArray[1], 2);
        assert.strictEqual(refArray[1], 2);

        envArray.replace(1, 1, [100]);
        assert.deepEqual(envArray, [1, 100, 3]);
        assert.deepEqual(refArray, [1, 100, 3]);

        envArray.pushObject(4);
        assert.deepEqual(envArray, [1, 100, 3, 4]);
        assert.deepEqual(refArray, [1, 100, 3, 4]);

        refArray.shiftObject();
        assert.deepEqual(envArray, [100, 3, 4]);
        assert.deepEqual(refArray, [100, 3, 4]);
      },
    },
  });

  exclaimTest('helper invocation', {
    implementationMap: {
      shout: {
        helper: (config) => config.word.toUpperCase(),
        shorthandProperty: 'word',
      },
      reverse: {
        helper: (config) => config.word.split('').reverse().join(''),
        shorthandProperty: 'word',
      },
      length: {
        helper: (config) => config.word.length,
        shorthandProperty: 'word',
      },
    },
    env: {
      foo: 'bar',
    },
    ui: {
      shouty: { $shout: { $bind: 'foo' } },
      array: [1, 2, { $length: { $bind: 'foo' } }],
      nested: { $shout: { $reverse: { $bind: 'foo' } } },
      $validate(assert) {
        assert.strictEqual(this.env.foo, 'bar');
        assert.strictEqual(this.config.shouty, 'BAR');
        assert.strictEqual(this.config.nested, 'RAB');
        assert.deepEqual(this.config.array, [1, 2, 3]);

        set(this.env, 'foo', 'ok');

        assert.strictEqual(this.env.foo, 'ok');
        assert.strictEqual(this.config.shouty, 'OK');
        assert.strictEqual(this.config.nested, 'KO');
        assert.deepEqual(this.config.array, [1, 2, 2]);
      },
    },
  });
});
