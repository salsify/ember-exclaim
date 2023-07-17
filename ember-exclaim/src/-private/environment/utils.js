export function extractKey(object) {
  if (object && typeof object === 'object' && '__key__' in object) {
    return object.__key__;
  }
}
