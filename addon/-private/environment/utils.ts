export function extractKey(object: unknown): string | undefined {
  if (hasKey(object) && typeof object.__key__ === 'string') {
    return object.__key__;
  }

  return undefined;
}

function hasKey(object: unknown): object is { __key__: unknown } {
  return typeof object === 'object' && !!object && '__key__' in object;
}
