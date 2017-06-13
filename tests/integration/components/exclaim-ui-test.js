import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import { fillIn } from 'ember-native-dom-helpers';

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
    set(this, 'resolveComponent', name => name);

    this.renderUI = () => {
      this.render(hbs`{{exclaim-ui resolveComponent=resolveComponent ui=ui env=env}}`);
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
