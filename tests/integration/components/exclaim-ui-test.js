import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import { fillIn } from 'ember-native-dom-helpers';
import sinon from 'sinon';

const {
  run,
  get,
  set,
  getOwner,
  computed,
  Component,
} = Ember;

moduleForComponent('exclaim-ui', 'Integration | Component | exclaim-ui', {
  integration: true,

  beforeEach() {
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

    this.renderUI = () => {
      this.render(hbs`{{exclaim-ui implementationMap=implementationMap ui=ui env=env resolveFieldMeta=resolveFieldMeta onChange=onChange wrapper=wrapper}}`);
    };
  }
});

test('it renders a basic component', function(assert) {
  getOwner(this).register('component:simple-component', Component.extend({
    layout: hbs`<div data-value>{{config.value}}</div>`
  }));

  set(this, 'ui', {
    $component: 'simple-component',
    value: 'value!'
  });

  this.renderUI();
  assert.equal(this.$('[data-value]').text(), 'value!');
});

test('it invokes helpers', function(assert) {
  getOwner(this).register('component:simple-component', Component.extend({
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

  this.renderUI();
  assert.equal(this.$('[data-value]').text(), 'a, b, c');
});

test('it renders subcomponents', function(assert) {
  getOwner(this).register('component:parent-component', Component.extend({
    layout: hbs`{{yield config.childA}}{{yield config.childB}}`
  }));

  getOwner(this).register('component:child-component', Component.extend({
    layout: hbs`<div data-id={{config.id}}>{{config.name}}</div>`
  }));

  set(this, 'ui', {
    $component: 'parent-component',
    childA: { $component: 'child-component', id: 1, name: 'one' },
    childB: { $component: 'child-component', id: 2, name: 'two' },
  });

  this.renderUI();
  assert.equal(this.$('[data-id=1]').text(), 'one');
  assert.equal(this.$('[data-id=2]').text(), 'two');
});

test('it renders data bound to the env', function(assert) {
  getOwner(this).register('component:simple-component', Component.extend({
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

  this.renderUI();
  assert.equal(this.$('[data-value]').text(), 'hello');

  run(() => set(this, 'env.envValue', 'goodbye'));
  assert.equal(this.$('[data-value]').text(), 'goodbye');
});

test('it writes bound data back to the env', function(assert) {
  getOwner(this).register('component:simple-component', Component.extend({
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

  this.renderUI();
  assert.equal(this.$('input').val(), 'before');

  run(() => fillIn('input', 'after'))
  assert.equal(get(this, 'env.envValue'), 'after');
});

test('it should call the onChange action when the env changes', function(assert) {
  set(this, 'onChange', sinon.spy((envKey) => envKey));

  getOwner(this).register('component:simple-component', Component.extend({
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

  this.renderUI();

  run(() => fillIn('input', 'after'))

  assert.ok(get(this, 'onChange').calledOnce);
  assert.ok(get(this, 'onChange').calledWith('envValue'));
  assert.equal(get(this, `env.${get(this, 'onChange').firstCall.returnValue}`), 'after')
});

test('it renders subcomponents with extended envs', function(assert) {
  getOwner(this).register('component:parent-component', Component.extend({
    layout: hbs`{{yield config.child envA}}{{yield config.child envB}}`,

    envA: computed(function() {
      return get(this, 'env').extend({ id: 1, value: 'a' });
    }),

    envB: computed(function() {
      return get(this, 'env').extend({ id: 2, value: 'b' });
    })
  }));

  getOwner(this).register('component:child-component', Component.extend({
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

  this.renderUI();
  assert.equal(this.$('[data-id=1]').text(), 'a');
  assert.equal(this.$('[data-id=2]').text(), 'b');
});

test('it allows components to resolve field metadata', function(assert) {
  getOwner(this).register('component:parent-component', Component.extend({
    layout: hbs`{{#each envs as |env|}}{{yield config.child env}}{{/each}}`,

    envs: computed('config.items.[]', function() {
      return this.get('config.items').map((item) => {
        return this.get('env').extend({ item });
      });
    }),
  }));

  getOwner(this).register('component:child-component', Component.extend({
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

  this.renderUI();
  assert.equal(this.$().text(), 'Invalid.Invalid.');

  run(() => this.set('env.data.a.value', 'DATA.A.VALUE'));
  assert.equal(this.$().text(), 'DATA.A.VALUEInvalid.');

  run(() => this.set('env.data.b.value', 'DATA.A.VALUE'));
  assert.equal(this.$().text(), 'DATA.A.VALUEInvalid.');

  run(() => this.set('env.data.b.value', 'DATA.B.VALUE'));
  assert.equal(this.$().text(), 'DATA.A.VALUEDATA.B.VALUE');
});

test('it renders the wrapper component around every extensible component', function(assert) {
  getOwner(this).register('component:wrapper-component', Component.extend({
    layout: hbs`<code>{{yield}}</code>`,
  }));

  getOwner(this).register('component:simple-component', Component.extend({
    layout: hbs`<div data-value>{{config.value}}</div>`
  }));

  set(this, 'ui', {
    $component: 'simple-component',
    value: 'value!'
  });

  set(this, 'wrapper', 'wrapper-component');

  this.renderUI();

  assert.equal(this.$().text(), 'value!');
  assert.equal(this.$('code').length, 1);
});
