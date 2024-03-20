import { deprecate } from '@ember/debug';

export { ComponentSpec, HelperSpec } from './-private/ui-spec.js';
export { resolveEnvPath } from './-private/paths.js';

export function unwrap(value) {
  deprecate('`unwrap` is a no-op in Exclaim v2', true, {
    for: 'ember-exclaim',
    id: 'ember-exclaim.unwrap',
    since: { available: '2.0.0', enabled: '2.0.0' },
    until: '3.0.0',
  });
  return value;
}
