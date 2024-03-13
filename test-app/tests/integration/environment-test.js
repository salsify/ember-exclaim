import Component from '@glimmer/component';
import { A } from '@ember/array';
import { set, get } from '@ember/object';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { htmlSafe } from '@ember/template';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | environment', function (hooks) {
  setupRenderingTest(hooks);

  function exclaimTest(name, { ui, env, resolveFieldMeta, implementationMap }) {
    // eslint-disable-next-line qunit/require-expect
    test(name, async function (assert) {
      let deferred = {};
      deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
      });

      this.env = env;
      this.ui = ui;
      this.resolveFieldMeta = resolveFieldMeta;
      this.implementationMap = {
        validate: {
          shorthandProperty: 'callback',
          componentPath: class extends Component {
            constructor(owner, args) {
              super(owner, args);
              setTimeout(() =>
                this.runCallback().then(deferred.resolve, deferred.reject)
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
          @resolveFieldMeta={{this.resolveFieldMeta}}
          @implementationMap={{this.implementationMap}}
        />
      `);

      await deferred.promise;
    });
  }

  exclaimTest('simple lookups', {
    env: { foo: 'bar' },
    ui: {
      async $validate(assert) {
        assert.strictEqual(get(this.env, 'foo'), 'bar');

        set(this.env, 'foo', 'baz');
        assert.strictEqual(get(this.env, 'foo'), 'baz');
      },
    },
  });

  exclaimTest('simple array lookups', {
    env: { foo: ['bar', 'baz'] },
    ui: {
      async $validate(assert) {
        assert.strictEqual(get(this.env, 'foo.0'), 'bar');
        assert.strictEqual(get(this.env, 'foo.1'), 'baz');
      },
    },
  });

  exclaimTest('set unknown property', {
    env: { foo: ['bar'] },
    ui: {
      async $validate(assert) {
        set(this.env, 'baz', 'bax');
        assert.strictEqual(get(this.env, 'baz'), 'bax');
        assert.strictEqual(get(this.env, 'foo.length'), 1);
        set(this.env, 'foo.3', 'qux');
        assert.strictEqual(get(this.env, 'foo.3'), 'qux');
        assert.strictEqual(get(this.env, 'foo.length'), 4);
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
        assert.strictEqual(get(this.env, 'foo.1'), 'oops');
        set(this.config.bound, '0', 'oops again');
        assert.strictEqual(get(this.env, 'foo.0'), 'oops again');
      },
    },
  });

  exclaimTest('HTML-safe strings', {
    env: { foo: htmlSafe('hello') },
    ui: {
      async $validate(assert) {
        assert.deepEqual(get(this.env, 'foo'), htmlSafe('hello'));
      },
    },
  });

  exclaimTest('simple binding resolution', {
    env: { foo: 'bar' },
    ui: {
      baz: { $bind: 'foo' },
      async $validate(assert) {
        assert.strictEqual(get(this.config, 'baz'), 'bar');

        set(this.env, 'foo', 'qux');
        assert.strictEqual(get(this.config, 'baz'), 'qux');

        set(this.config, 'baz', 'fizz');
        assert.strictEqual(get(this.env, 'foo'), 'fizz');
      },
    },
  });

  exclaimTest('complex binding resolution', {
    env: { x: { y: 'foo', z: 'bar' } },
    resolveFieldMeta: (path) => path,
    ui: {
      other: { $bind: 'x' },
      stillMore: { $bind: 'x.z' },
      $validate(assert) {
        assert.strictEqual(this.config.stillMore, 'bar');
        assert.strictEqual(this.env.metaForField('x.y'), 'x.y');
        assert.strictEqual(this.env.metaForField(this.config, 'other'), 'x');
        assert.strictEqual(
          this.env.metaForField(this.config, 'stillMore'),
          'x.z'
        );

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
    resolveFieldMeta: (path) => path,
    ui: {
      value: { key: { $bind: 'foo' } },
      async $validate(assert) {
        const value = this.config.value;
        assert.strictEqual(get(value, 'key'), 'bar');
        assert.strictEqual(this.env.metaForField(value, 'key'), 'foo');

        set(value, 'key', 'ok');
        assert.strictEqual(get(this.env, 'foo'), 'ok');
      },
    },
  });

  exclaimTest('chained reference resolution', {
    env: { foo: 'bar' },
    resolveFieldMeta: (path) => path,
    ui: {
      value: { key: { child: { $bind: 'foo' } } },
      async $validate(assert) {
        const value = this.config.value;
        const subvalue = get(value, 'key');
        assert.strictEqual(get(subvalue, 'child'), 'bar');

        assert.strictEqual(this.env.metaForField(value, 'key'), undefined);
        assert.strictEqual(this.env.metaForField(value, 'key.child'), 'foo');
        assert.strictEqual(this.env.metaForField(subvalue, 'child'), 'foo');

        set(subvalue, 'child', 321);
        assert.strictEqual(get(value, 'key.child'), 321);
        assert.strictEqual(get(this.env, 'foo'), 321);

        set(this.env, 'foo', 999);
        assert.strictEqual(get(subvalue, 'child'), 999);
      },
    },
  });

  exclaimTest('array values', {
    env: { array: A([1, 2, 3]) },
    ui: {
      ref: { array: { $bind: 'array' } },
      async $validate(assert) {
        const ref = this.config.ref;
        assert.deepEqual(get(this.env, 'array'), [1, 2, 3]);
        assert.deepEqual(get(ref, 'array'), [1, 2, 3]);

        const envArray = get(this.env, 'array');
        const refArray = get(ref, 'array');
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

  exclaimTest('environment extension', {
    env: { a: 'bar' },
    ui: {
      async $validate(assert) {
        const base = this.env;
        const ext1 = base.extend({ b: 'qux' });
        const ext2 = base.extend({ a: 'newbar' });

        assert.strictEqual(get(base, 'a'), 'bar');
        assert.strictEqual(get(base, 'b'), undefined);

        assert.strictEqual(get(ext1, 'a'), 'bar');
        assert.strictEqual(get(ext1, 'b'), 'qux');

        assert.strictEqual(get(ext2, 'a'), 'newbar');
        assert.strictEqual(get(ext2, 'b'), undefined);

        // Writing to an inherited key updates at the level it was inherited from
        set(ext1, 'a', 'x');
        assert.strictEqual(get(base, 'a'), 'x');
        assert.strictEqual(get(ext1, 'a'), 'x');
        assert.strictEqual(get(ext2, 'a'), 'newbar');

        // Writing to an overridden key updates at the level of the override
        set(ext2, 'a', 'y');
        assert.strictEqual(get(base, 'a'), 'x');
        assert.strictEqual(get(ext1, 'a'), 'x');
        assert.strictEqual(get(ext2, 'a'), 'y');

        // Writing a previously-nonexistent key sets it in the leaf environment
        set(ext1, 'c', 'newvalue');
        assert.strictEqual(get(base, 'c'), undefined);
        assert.strictEqual(get(ext1, 'c'), 'newvalue');
        assert.strictEqual(get(ext2, 'c'), undefined);

        // Writing a previously-nonexistent key in the base propagates down
        set(base, 'd', 'everywhere');
        assert.strictEqual(get(base, 'd'), 'everywhere');
        assert.strictEqual(get(ext1, 'd'), 'everywhere');
        assert.strictEqual(get(ext2, 'd'), 'everywhere');
      },
    },
  });

  exclaimTest('path resolution', {
    env: {
      root: {
        super: {
          extra: {
            nested: true,
          },
        },
      },
    },
    resolveFieldMeta: (path) => path,
    ui: {
      nested: {
        pointsToRoot: { $bind: 'root' },
        ownKey: 'ownValue',
      },
      $validate(assert) {
        assert.strictEqual(this.env.metaForField('nonexistent'), 'nonexistent');
        assert.strictEqual(this.env.metaForField('root'), 'root');
        assert.strictEqual(
          this.env.metaForField(this.config, 'nested.ownKey'),
          undefined
        );
        assert.strictEqual(
          this.env.metaForField(this.config, 'nested.pointsToRoot'),
          'root'
        );
        assert.strictEqual(
          this.env.metaForField(
            this.config,
            'nested.pointsToRoot.super.extra.nested'
          ),
          'root.super.extra.nested'
        );

        const subenv = this.env.extend({
          subValue: 'hello',
          upReference: this.config.nested,
        });

        assert.strictEqual(
          this.env.metaForField(subenv, 'upReference.pointsToRoot'),
          'root'
        );
        assert.strictEqual(
          this.env.metaForField(subenv, 'subValue'),
          'subValue'
        );
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
        assert.strictEqual(get(this.env, 'foo'), 'bar');
        assert.strictEqual(this.config.shouty, 'BAR');
        assert.strictEqual(this.config.nested, 'RAB');
        assert.deepEqual(this.config.array, [1, 2, 3]);

        set(this.env, 'foo', 'ok');

        assert.strictEqual(get(this.env, 'foo'), 'ok');
        assert.strictEqual(this.config.shouty, 'OK');
        assert.strictEqual(this.config.nested, 'KO');
        assert.deepEqual(this.config.array, [1, 2, 2]);
      },
    },
  });
});
