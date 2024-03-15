import { set } from '@ember/object';
import { setComponentTemplate } from '@ember/component';
import Component from '@glimmer/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { resolveEnvPath } from 'ember-exclaim';

module('Integration | Component | exclaim-ui', function (hooks) {
  setupRenderingTest(hooks);

  function makeComponent(template, onInit) {
    return setComponentTemplate(
      template,
      class extends Component {
        constructor(owner, args) {
          super(owner, args);
          onInit?.(this);
        }
      }
    );
  }

  hooks.beforeEach(function () {
    this.renderUI = async (props) => {
      Object.assign(this, props);
      await render(
        hbs`
          <ExclaimUi
            @ui={{this.ui}}
            @env={{this.env}}
            @implementationMap={{this.implementationMap}}
            @onChange={{this.onChange}}
            @wrapper={{this.wrapper}}
          />
        `
      );
    };
  });

  test('it invokes helpers', async function (assert) {
    const implementationMap = {
      'simple-component': {
        componentPath: makeComponent(
          hbs`<div data-value>{{@config.value}}</div>`
        ),
      },
      join: {
        shorthandProperty: 'items',
        helper: (config) => {
          return config.items.join(config.separator ?? ', ');
        },
      },
    };

    const env = { variable: 'b' };
    const ui = {
      $component: 'simple-component',
      value: { $join: ['a', { $bind: 'variable' }, 'c'] },
    };

    await this.renderUI({ implementationMap, env, ui });

    assert.strictEqual(
      this.element.querySelector('[data-value]').textContent,
      'a, b, c'
    );
  });

  test('it renders a basic component', async function (assert) {
    const implementationMap = {
      'simple-component': {
        componentPath: makeComponent(
          hbs`<div data-value>{{@config.value}}</div>`
        ),
      },
    };

    const ui = {
      $component: 'simple-component',
      value: 'value!',
    };

    await this.renderUI({ implementationMap, ui });

    assert.strictEqual(
      this.element.querySelector('[data-value]').textContent,
      'value!'
    );
  });

  test('it renders subcomponents', async function (assert) {
    const implementationMap = {
      'parent-component': {
        componentPath: makeComponent(
          hbs`{{yield @config.childA}}{{yield @config.childB}}`
        ),
      },
      'child-component': {
        componentPath: makeComponent(
          hbs`<div data-id={{@config.id}}>{{@config.name}}</div>`
        ),
      },
    };

    const ui = {
      $component: 'parent-component',
      childA: { $component: 'child-component', id: 1, name: 'one' },
      childB: { $component: 'child-component', id: 2, name: 'two' },
    };

    await this.renderUI({ implementationMap, ui });

    assert.dom('[data-id="1"]').hasText('one');
    assert.dom('[data-id="2"]').hasText('two');
  });

  test('it renders data bound to the env', async function (assert) {
    const implementationMap = {
      'simple-component': {
        componentPath: makeComponent(
          hbs`<div data-value>{{@config.value}}</div>`
        ),
      },
    };

    const ui = {
      $component: 'simple-component',
      value: {
        $bind: 'envValue',
      },
    };

    const env = {
      envValue: 'hello',
    };

    await this.renderUI({ implementationMap, ui, env });

    assert.dom('[data-value]').hasText('hello');

    set(env, 'envValue', 'goodbye');
    await settled();

    assert.dom('[data-value]').hasText('goodbye');
  });

  test('it writes bound data back to the env', async function (assert) {
    const implementationMap = {
      'simple-component': {
        componentPath: makeComponent(
          hbs`<input value={{@config.value}} oninput={{action (mut @config.value) value='target.value'}}>`
        ),
      },
    };

    const ui = {
      $component: 'simple-component',
      value: {
        $bind: 'envValue',
      },
    };

    const env = {
      envValue: 'before',
    };

    await this.renderUI({ implementationMap, ui, env });
    assert.dom('input').hasValue('before');

    await fillIn('input', 'after');
    assert.strictEqual(env.envValue, 'after');
  });

  test('it extends the environment and propagates changes', async function (assert) {
    const components = {};

    const implementationMap = {
      root: {
        componentPath: makeComponent(
          hbs`
            <div data-root-global>{{@config.global}}</div>
            <div data-first>{{yield @config.child (hash self='first')}}</div>
            <div data-second>{{yield @config.child (hash self='second')}}</div>
          `,
          (instance) => (components.root = instance)
        ),
      },
      child: {
        componentPath: makeComponent(
          hbs`
            <div data-global>{{@config.global}}</div>
            <div data-self>{{@config.self}}</div>
          `,
          (instance) => (components[instance.args.config.self] = instance)
        ),
      },
    };

    const ui = {
      $component: 'root',
      global: { $bind: 'global' },
      child: {
        $component: 'child',
        global: { $bind: 'global' },
        self: { $bind: 'self' },
      },
    };

    const env = {
      global: 'global',
    };

    await this.renderUI({ implementationMap, ui, env });

    assert.strictEqual(components.root.args.env.global, 'global');
    assert.strictEqual(components.first.args.env.global, 'global');
    assert.strictEqual(components.first.args.env.self, 'first');
    assert.strictEqual(components.second.args.env.global, 'global');
    assert.strictEqual(components.second.args.env.self, 'second');

    assert.dom('[data-root-global]').hasText('global');
    assert.dom('[data-first] [data-global]').hasText('global');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert.dom('[data-second] [data-global]').hasText('global');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(env, 'global', 'updated externally');
    await settled();

    assert.dom('[data-root-global]').hasText('updated externally');
    assert.dom('[data-first] [data-global]').hasText('updated externally');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert.dom('[data-second] [data-global]').hasText('updated externally');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(components.root.args.config, 'global', 'updated from root binding');
    await settled();

    assert.dom('[data-root-global]').hasText('updated from root binding');
    assert
      .dom('[data-first] [data-global]')
      .hasText('updated from root binding');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert
      .dom('[data-second] [data-global]')
      .hasText('updated from root binding');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(components.root.args.env, 'global', 'updated from root env');
    await settled();

    assert.dom('[data-root-global]').hasText('updated from root env');
    assert.dom('[data-first] [data-global]').hasText('updated from root env');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert.dom('[data-second] [data-global]').hasText('updated from root env');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(components.first.args.config, 'global', 'updated from child binding');
    await settled();

    assert.dom('[data-root-global]').hasText('updated from child binding');
    assert
      .dom('[data-first] [data-global]')
      .hasText('updated from child binding');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert
      .dom('[data-second] [data-global]')
      .hasText('updated from child binding');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(components.first.args.env, 'global', 'updated from child env');
    await settled();

    assert.dom('[data-root-global]').hasText('updated from child env');
    assert.dom('[data-first] [data-global]').hasText('updated from child env');
    assert.dom('[data-first] [data-self]').hasText('first');
    assert.dom('[data-second] [data-global]').hasText('updated from child env');
    assert.dom('[data-second] [data-self]').hasText('second');

    set(components.first.args.config, 'self', 'updated first');
    await settled();

    assert.dom('[data-root-global]').hasText('updated from child env');
    assert.dom('[data-first] [data-global]').hasText('updated from child env');
    assert.dom('[data-first] [data-self]').hasText('updated first');
    assert.dom('[data-second] [data-global]').hasText('updated from child env');
    assert.dom('[data-second] [data-self]').hasText('second');
  });

  test('it invokes @onChange when root environment fields change', async function (assert) {
    const components = {};

    const implementationMap = {
      root: {
        componentPath: makeComponent(
          hbs`{{yield @config.child (hash local='yes' base='no')}}`,
          (instance) => (components.root = instance)
        ),
      },
      child: {
        componentPath: makeComponent(
          hbs``,
          (instance) => (components.child = instance)
        ),
      },
    };

    const ui = {
      $component: 'root',
      a: { $bind: 'object' },
      b: { $bind: 'object.name' },
      c: { $bind: 'base' },
      child: {
        $component: 'child',
        a: { $bind: 'object' },
        b: { $bind: 'object.name' },
        c: { $bind: 'base' },
        d: { $bind: 'local' },
      },
    };

    const env = {
      object: { name: 'Fido' },
      base: 'yes',
    };

    let lastChange = null;
    const onChange = (changePath) => (lastChange = changePath);

    await this.renderUI({ implementationMap, ui, env, onChange });

    // Changing through a config binding to the root env
    lastChange = null;
    set(components.root.args.config, 'b', 'Ralph');
    await settled();
    assert.strictEqual(components.child.args.config.b, 'Ralph');
    assert.strictEqual(lastChange, 'object.name');

    // Changing through a config binding to an inherited key in an extended env
    lastChange = null;
    set(components.child.args.config, 'b', 'Nancy');
    await settled();
    assert.strictEqual(components.child.args.config.b, 'Nancy');
    assert.strictEqual(lastChange, 'object.name');

    // (Not) changing through a config binding to an overridden key in an extended env
    lastChange = null;
    set(components.child.args.config, 'c', 'maybe');
    await settled();
    assert.strictEqual(components.child.args.config.c, 'maybe');
    assert.strictEqual(components.root.args.config.c, 'yes');
    assert.strictEqual(lastChange, null);

    // (Not) changing through a config binding to a extra key in an extended env
    lastChange = null;
    set(components.child.args.config, 'd', 'maybe');
    await settled();
    assert.strictEqual(components.child.args.config.d, 'maybe');
    assert.strictEqual(lastChange, null);
  });

  test('it allows components to resolve field locations', async function (assert) {
    const components = {};

    const implementationMap = {
      root: {
        componentPath: makeComponent(
          hbs`{{yield @config.child (hash local='local')}}`,
          (instance) => (components.root = instance)
        ),
      },
      child: {
        componentPath: makeComponent(
          hbs``,
          (instance) => (components.child = instance)
        ),
      },
    };

    const ui = {
      $component: 'root',
      data: { $bind: 'global' },
      child: {
        $component: 'child',
        globalData: { $bind: 'global' },
        localData: { $bind: 'local' },
      },
    };

    const env = {
      global: 'global',
    };

    await this.renderUI({ implementationMap, ui, env });

    assert.strictEqual(components.root.args.config.data, 'global');
    assert.strictEqual(
      resolveEnvPath(components.root.args.config, 'data'),
      'global'
    );
    assert.strictEqual(
      resolveEnvPath(components.root.args.env, 'global'),
      'global'
    );

    assert.strictEqual(components.child.args.config.globalData, 'global');
    assert.strictEqual(
      resolveEnvPath(components.child.args.config, 'globalData'),
      'global'
    );
    assert.strictEqual(
      resolveEnvPath(components.child.args.env, 'global'),
      'global'
    );

    assert.strictEqual(components.child.args.config.localData, 'local');
    assert.strictEqual(
      resolveEnvPath(components.child.args.config, 'localData'),
      'local'
    );
    assert.strictEqual(
      resolveEnvPath(components.child.args.env, 'local'),
      'local'
    );
  });
});
