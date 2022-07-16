import Validator from '../index';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('basic test', (inputPhonenumber, expectedResult) => {
  const x = new Validator(inputPhonenumber);
  expect(x.validatePhonenumber()).toBe(expectedResult);
});
