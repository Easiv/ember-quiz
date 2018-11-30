import { helper } from '@ember/component/helper';

export function increment(index) {
  return parseInt(++index)
}

export default helper(increment);
