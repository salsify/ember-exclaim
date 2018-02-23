import { helper } from '@ember/component/helper';

export default helper(([string]) => JSON.parse(string || '{}'));
