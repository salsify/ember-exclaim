import { run } from '@ember/runloop';
import { computed, set, get } from '@ember/object';
import Component from '@ember/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | exclaim-ui', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    set(this, 'onChange', () => {});
    set(this, 'implementationMap', {
      'simple-component': {
        componentPath: 'simple-component',
      },
      'parent-component': {
        componentPath: 'parent-component',
      },
      'child-component': {
        componentPath: 'child-component'
      }
    });

    set(this, 'resolveFieldMeta', () => {});

    this.renderUI = async () => {
      await render(
        hbs`{{exclaim-ui implementationMap=implementationMap ui=ui env=env resolveFieldMeta=resolveFieldMeta onChange=onChange wrapper=wrapper}}`
      );
    };
  });


  test('it invokes helpers', async function(assert) {
    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<div data-value>{{config.value}}</div>`
    }));

    set(this, 'implementationMap.join', {
      shorthandProperty: 'items',
      helper: (config) => {
        let items = get(config, 'items').toArray();
        let separator = get(config, 'separator') || ', ';
        return items.join(separator);
      }
    });

    set(this, 'env', { variable: 'b' });

    set(this, 'ui', {
      $component: 'simple-component',
      value: { $join: ['a', { $bind: 'variable' }, 'c'] }
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-value]').textContent, 'a, b, c');
  });

  test('it renders a basic component', async function(assert) {
    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<div data-value>{{config.value}}</div>`
    }));

    set(this, 'ui', {
      $component: 'simple-component',
      value: 'value!'
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-value]').textContent, 'value!');
  });

  test('it renders subcomponents', async function(assert) {
    this.owner.register('component:parent-component', Component.extend({
      layout: hbs`{{yield config.childA}}{{yield config.childB}}`
    }));

    this.owner.register('component:child-component', Component.extend({
      layout: hbs`<div data-id={{config.id}}>{{config.name}}</div>`
    }));

    set(this, 'ui', {
      $component: 'parent-component',
      childA: { $component: 'child-component', id: 1, name: 'one' },
      childB: { $component: 'child-component', id: 2, name: 'two' },
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-id="1"]').textContent, 'one');
    assert.equal(this.element.querySelector('[data-id="2"]').textContent, 'two');
  });

  test('it renders data bound to the env', async function(assert) {
    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<div data-value>{{config.value}}</div>`
    }));

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue'
      }
    });

    set(this, 'env', {
      envValue: 'hello'
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-value]').textContent, 'hello');

    run(() => set(this, 'env.envValue', 'goodbye'));
    assert.equal(this.element.querySelector('[data-value]').textContent, 'goodbye');
  });

  test('it writes bound data back to the env', async function(assert) {
    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<input value={{config.value}} oninput={{action (mut config.value) value='target.value'}}>`
    }));

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue'
      }
    });

    set(this, 'env', {
      envValue: 'before'
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('input').value, 'before');

    await fillIn('input', 'after');
    assert.equal(get(this, 'env.envValue'), 'after');
  });

  test('it should call the onChange action when the env changes', async function(assert) {
    set(this, 'onChange', sinon.spy((envKey) => envKey));

    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<input value={{config.value}} oninput={{action (mut config.value) value='target.value'}}>`
    }));

    set(this, 'ui', {
      $component: 'simple-component',
      value: {
        $bind: 'envValue'
      }
    });

    set(this, 'env', {
      envValue: 'before'
    });

    await this.renderUI();
    await fillIn('input', 'after');

    assert.ok(get(this, 'onChange').calledOnce);
    assert.ok(get(this, 'onChange').calledWith('envValue'));
    assert.equal(get(this, `env.${get(this, 'onChange').firstCall.returnValue}`), 'after')
  });

  test('it renders subcomponents with extended envs', async function(assert) {
    this.owner.register('component:parent-component', Component.extend({
      layout: hbs`{{yield config.child envA}}{{yield config.child envB}}`,

      envA: computed(function() {
        return get(this, 'env').extend({ id: 1, value: 'a' });
      }),

      envB: computed(function() {
        return get(this, 'env').extend({ id: 2, value: 'b' });
      })
    }));

    this.owner.register('component:child-component', Component.extend({
      layout: hbs`<div data-id={{config.id}}>{{config.text}}</div>`
    }));

    set(this, 'ui', {
      $component: 'parent-component',
      child: {
        $component: 'child-component',
        id: { $bind: 'id' },
        text: { $bind: 'value' }
      }
    });

    await this.renderUI();
    assert.equal(this.element.querySelector('[data-id="1"]').textContent, 'a');
    assert.equal(this.element.querySelector('[data-id="2"]').textContent, 'b');
  });

  test('it allows components to resolve field metadata', async function(assert) {
    this.owner.register('component:parent-component', Component.extend({
      layout: hbs`{{#each envs as |env|}}{{yield config.child env}}{{/each}}`,

      envs: computed('config.items.[]', function() {
        return this.get('config.items').map((item) => {
          return this.get('env').extend({ item });
        });
      }),
    }));

    this.owner.register('component:child-component', Component.extend({
      layout: hbs`{{if error error config.value}}`,

      error: computed('config.value', function() {
        const meta = this.get('env').metaForField(this, 'config.value');
        if (meta && this.get('config.value') !== meta.goldStandard) {
          return 'Invalid.';
        }
      })
    }));

    set(this, 'ui', {
      $component: 'parent-component',
      items: [
        { $bind: 'data.a' },
        { $bind: 'data.b' },
      ],
      child: {
        $component: 'child-component',
        value: { $bind: 'item.value' }
      }
    });

    set(this, 'resolveFieldMeta', (path) => {
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

  test('it renders the wrapper component around every extensible component', async function(assert) {
    this.owner.register('component:wrapper-component', Component.extend({
      layout: hbs`<code>{{yield}}</code>`,
    }));

    this.owner.register('component:simple-component', Component.extend({
      layout: hbs`<div data-value>{{config.value}}</div>`
    }));

    set(this, 'ui', {
      $component: 'simple-component',
      value: 'value!'
    });

    set(this, 'wrapper', 'wrapper-component');

    await this.renderUI();

    assert.equal(this.element.textContent, 'value!');
    assert.equal(this.element.querySelectorAll('code').length, 1);
  });
});
