/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/no-get */

import { run } from '@ember/runloop';
import { computed, set, get } from '@ember/object';
import Component from '@ember/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import type { TestContext } from 'ember-test-helpers';
import { ImplementationMap } from 'ember-exclaim';
import EmberArray from '@ember/array';

module('Integration | Component | exclaim-ui', function (hooks) {
  setupRenderingTest(hooks);

  interface ExclaimTestContext extends TestContext {
    onChange: (key: string) => unknown;
    resolveFieldMeta: (path: string) => unknown;
    renderUI: () => Promise<void>;
    wrapper?: string;
    env: Record<string, unknown>;
    ui: Record<string, unknown>;
    implementationMap: ImplementationMap;
  }

  hooks.beforeEach(function (this: ExclaimTestContext) {
    set(this, 'onChange', () => undefined);
    set(this, 'implementationMap', {
      'simple-component': {
        componentPath: 'simple-component',
      },
      'parent-component': {
        componentPath: 'parent-component',
      },
      'child-component': {
        componentPath: 'child-component',
      },
    });

    set(this, 'resolveFieldMeta', () => undefined);

    this.renderUI = async () => {
      await render(
        hbs`{{exclaim-ui implementationMap=this.implementationMap ui=this.ui env=this.env resolveFieldMeta=this.resolveFieldMeta onChange=this.onChange wrapper=this.wrapper}}`
      );
    };
  });

  test('it invokes helpers', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<div data-value>{{@config.value}}</div>`,
      })
    );

    set(this.implementationMap, 'join', {
      shorthandProperty: 'items',
      helper: (config: { items: EmberArray<unknown>; separator?: string }) => {
        const items = get(config, 'items').toArray();
        const separator = get(config, 'separator') || ', ';
        return items.join(separator);
      },
    });

    set(this, 'env', { variable: 'b' });

    set(this, 'ui', {
      $component: 'simple-component',
      value: { $join: ['a', { $bind: 'variable' }, 'c'] },
    });

    await this.renderUI();
    assert.equal(
      this.element.querySelector('[data-value]')?.textContent,
      'a, b, c'
    );
  });

  test('it renders a basic component', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<div data-value>{{@config.value}}</div>`,
      })
    );

    set(this, 'ui', {
      $component: 'simple-component',
      value: 'value!',
    });

    await this.renderUI();
    assert.equal(
      this.element.querySelector('[data-value]')?.textContent,
      'value!'
    );
  });

  test('it renders subcomponents', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:parent-component',
      Component.extend({
        layout: hbs`{{yield @config.childA}}{{yield @config.childB}}`,
      })
    );

    this.owner.register(
      'component:child-component',
      Component.extend({
        layout: hbs`<div data-id={{@config.id}}>{{@config.name}}</div>`,
      })
    );

    set(this, 'ui', {
      $component: 'parent-component',
      childA: { $component: 'child-component', id: 1, name: 'one' },
      childB: { $component: 'child-component', id: 2, name: 'two' },
    });

    await this.renderUI();
    assert.equal(
      this.element.querySelector('[data-id="1"]')?.textContent,
      'one'
    );
    assert.equal(
      this.element.querySelector('[data-id="2"]')?.textContent,
      'two'
    );
  });

  test('it renders data bound to the env', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<div data-value>{{@config.value}}</div>`,
      })
    );

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue',
      },
    });

    set(this, 'env', {
      envValue: 'hello',
    });

    await this.renderUI();
    assert.equal(
      this.element.querySelector('[data-value]')?.textContent,
      'hello'
    );

    run(() => set(this.env, 'envValue', 'goodbye'));
    assert.equal(
      this.element.querySelector('[data-value]')?.textContent,
      'goodbye'
    );
  });

  test('it writes bound data back to the env', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<input value={{@config.value}} oninput={{action (mut @config.value) value='target.value'}}>`,
      })
    );

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue',
      },
    });

    set(this, 'env', {
      envValue: 'before',
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('input')?.value, 'before');

    await fillIn('input', 'after');
    assert.equal(get(this.env, 'envValue'), 'after');
  });

  test('it should call the onChange action when the env changes', async function (this: ExclaimTestContext, assert) {
    const onChange = sinon.spy((envKey) => envKey);
    set(this, 'onChange', onChange);

    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<input value={{@config.value}} oninput={{action (mut @config.value) value='target.value'}}>`,
      })
    );

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue',
      },
    });

    set(this, 'env', {
      envValue: 'before',
    });

    await this.renderUI();
    await fillIn('input', 'after');

    assert.ok(onChange.calledOnce);
    assert.ok(onChange.calledWith('envValue'));
    assert.equal(
      get(this, `env.${onChange.firstCall.returnValue}` as never),
      'after'
    );
  });

  test('it renders subcomponents with extended envs', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:parent-component',
      Component.extend({
        layout: hbs`{{yield @config.child this.envA}}{{yield @config.child this.envB}}`,

        envA: computed('env', function () {
          return this.env.extend({ id: 1, value: 'a' });
        }),

        envB: computed('env', function () {
          return this.env.extend({ id: 2, value: 'b' });
        }),
      })
    );

    this.owner.register(
      'component:child-component',
      Component.extend({
        layout: hbs`<div data-id={{@config.id}}>{{@config.text}}</div>`,
      })
    );

    set(this, 'ui', {
      $component: 'parent-component',
      child: {
        $component: 'child-component',
        id: { $bind: 'id' },
        text: { $bind: 'value' },
      },
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-id="1"]')?.textContent, 'a');
    assert.equal(this.element.querySelector('[data-id="2"]')?.textContent, 'b');
  });

  test('it allows components to resolve field metadata', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:parent-component',
      Component.extend({
        layout: hbs`{{#each this.envs as |env|}}{{yield @config.child env}}{{/each}}`,

        envs: computed('config.items.[]', 'env', function () {
          return this.get('config.items').map((item: unknown) => {
            return this.env.extend({ item });
          });
        }),
      })
    );

    this.owner.register(
      'component:child-component',
      Component.extend({
        layout: hbs`{{if this.error this.error @config.value}}`,

        error: computed('config.value', 'env', function () {
          const meta = this.env.metaForField(this, 'config.value');
          if (meta && this.get('config.value') !== meta.goldStandard) {
            return 'Invalid.';
          }
          return;
        }),
      })
    );

    set(this, 'ui', {
      $component: 'parent-component',
      items: [{ $bind: 'data.a' }, { $bind: 'data.b' }],
      child: {
        $component: 'child-component',
        value: { $bind: 'item.value' },
      },
    });

    set(this, 'resolveFieldMeta', (path: string) => {
      return { goldStandard: path.toUpperCase() };
    });

    set(this, 'env', {
      data: {
        a: { value: 'hello' },
        b: { value: 'goodbye' },
      },
    });

    await this.renderUI();
    assert.equal(this.element.textContent, 'Invalid.Invalid.');

    run(() => this.set('env.data.a.value', 'DATA.A.VALUE'));
    assert.equal(this.element.textContent, 'DATA.A.VALUEInvalid.');

    run(() => this.set('env.data.b.value', 'DATA.A.VALUE'));
    assert.equal(this.element.textContent, 'DATA.A.VALUEInvalid.');

    run(() => this.set('env.data.b.value', 'DATA.B.VALUE'));
    assert.equal(this.element.textContent, 'DATA.A.VALUEDATA.B.VALUE');
  });

  test('it renders the wrapper component around every extensible component', async function (this: ExclaimTestContext, assert) {
    this.owner.register(
      'component:wrapper-component',
      Component.extend({
        layout: hbs`<code>{{yield}}</code>`,
      })
    );

    this.owner.register(
      'component:simple-component',
      Component.extend({
        layout: hbs`<div data-value>{{@config.value}}</div>`,
      })
    );

    set(this, 'ui', {
      $component: 'simple-component',
      value: 'value!',
    });

    set(this, 'wrapper', 'wrapper-component');

    await this.renderUI();

    assert.equal(this.element.textContent, 'value!');
    assert.equal(this.element.querySelectorAll('code').length, 1);
  });
});
