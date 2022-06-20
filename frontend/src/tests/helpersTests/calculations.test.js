import { genKey } from '../../helpers';

expect.extend({
  toBeDistinct(array) {
    const pass = Array.isArray(array) && new Set(array).size === array.length;
    if (pass) {
      return {
        message: () => `expected [${array}] array is unique`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected [${array}] array is not to unique`,
        pass: false,
      };
    }
  },
});

test('Generates unique keys', () => {
  const array = [];
  let times = 5;
  for (let i = 0; i < times; i++) {
    array.push(genKey());
  }
  expect(array).toBeDistinct();
});
