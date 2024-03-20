// This fun bit of line noise is a workaround for
// https://github.com/embroider-build/ember-auto-import/issues/503#issuecomment-1064405138
const envInternals = (globalThis[Symbol.for('exclaim-env-internals')] ??=
  new WeakMap());

export function makeEnv(data, onChange, { bind, extend }) {
  return setInternals(data, { onChange, bind, extend });
}

export function isEnv(data) {
  return envInternals.has(data);
}

export function extendEnv(env, newBindings) {
  if (!newBindings || !Object.keys(newBindings).length) {
    return env;
  }

  const internals = envInternals.get(env);
  const newEnv = internals.extend(env, newBindings);
  const onChange = (key) => {
    // We only want to propagate `onChange` if it's to a key in the
    // original environment; anything added lower in the UI is irrelevant
    // to the original `<ExclaimUi>` invoker.
    if (!(key.split('.')[0] in newBindings)) {
      internals.onChange?.(key);
    }
  };

  return setInternals(newEnv, { ...internals, onChange });
}

export function bindData(config, env) {
  return envInternals.get(env).bind(config, env);
}

export function triggerChange(env, key) {
  envInternals.get(env).onChange?.(key);
}

function setInternals(env, internals) {
  if (!isEnv(env)) {
    envInternals.set(env, internals);
  }

  return env;
}
