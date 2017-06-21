import Ember from 'ember';
const {
  Helper: { helper }
} = Ember;

export default helper(([string]) => JSON.parse(string || '{}'));
