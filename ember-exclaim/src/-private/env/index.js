const EnvInternals = Symbol.for('env-internals');

export function makeEnv(data, onChange, { bind, extend }) {
  return setInternals(data, { onChange, bind, extend });
}

export function isEnv(data) {
  return EnvInternals in data;
}

export function extendEnv(env, newBindings) {
  const internals = env[EnvInternals];
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
  return env[EnvInternals].bind(config, env);
}

export function triggerChange(env, key) {
  env[EnvInternals].onChange?.(key);
}

function setInternals(env, internals) {
  Object.defineProperty(env, EnvInternals, {
    enumerable: false,
    configurable: false,
    get: () => internals,
  });

  return env;
}
