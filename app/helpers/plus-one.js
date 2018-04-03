import { helper } from '@ember/component/helper';

export function addOne(index) {
  let idx = Number(index)
  return idx + 1
}

export default helper(addOne);
