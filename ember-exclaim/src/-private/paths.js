import { get } from '@ember/object';
import { isEnv } from './env/index.js';

// This fun bit of line noise is a workaround for
// https://github.com/embroider-build/ember-auto-import/issues/503#issuecomment-1064405138
const paths = (globalThis[Symbol.for('exclaim-paths-lookup')] ??=
  new WeakMap());

/**
 * Notes, for a given key on a given object, the source environment
 * and path where the value for that key originates.
 */
export function recordCanonicalPath(object, key, env, path) {
  let pathsForObject = paths.get(object);
  if (!pathsForObject) {
    pathsForObject = new Map();
    paths.set(object, pathsForObject);
  }
  pathsForObject.set(key, { env, path });
}

/**
 * Returns the known environment and source path within it where
 * the field at the path on the given object originates, if known.
 */
export function resolveEnvPath(object, path) {
  let parts = path.split('.');
  let current = object;
  // If we're starting from an environment to begin with, then the given
  // path could be the canonical one on its own; otherwise if it's just
  // on a random object, we won't know what we're looking at until we first
  // encounter a bound field.
  let fullCanonicalPath = isEnv(object) ? [] : undefined;

  while (parts.length) {
    if (!current) return;

    let key = parts.shift();
    let canonical = paths.get(current)?.get(key);
    if (canonical) {
      current = canonical.env;
      parts.unshift(...canonical.path.split('.'));
      fullCanonicalPath = [];
    } else {
      current = get(current, key);
      fullCanonicalPath?.push(key);
    }
  }

  return fullCanonicalPath?.join('.');
}
