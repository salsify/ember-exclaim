import { helper } from '@ember/component/helper';

export default helper(([key, value]) => ({ [key]: value }));
