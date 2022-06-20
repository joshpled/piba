import { toCapitalizeEach, toCamelCase } from '../../helpers';

const sampleText1 = 'current_location';
const sampleText2 = 'current_weight_in_pounds';
const sampleText3 = 'pattern';

test('Capitalize Function works properly', () => {
  const testText = toCapitalizeEach(sampleText1);
  const testText2 = toCapitalizeEach(sampleText2);
  const testText3 = toCapitalizeEach(sampleText3);
  expect(testText).toBe('Current Location');
  expect(testText2).toBe('Current Weight In Pounds');
  expect(testText3).toBe('Pattern');
});

test('Camel Case Function works properly', () => {
  const testText = toCamelCase(sampleText1);
  const testText2 = toCamelCase(sampleText2);
  const testText3 = toCamelCase(sampleText3);
  expect(testText).toBe('currentLocation');
  expect(testText2).toBe('currentWeightInPounds');
  expect(testText3).toBe('pattern');
});

test('Return Empty String if necessary', () => {
  const sampleString = '';
  const testText1 = toCapitalizeEach(sampleString);
  const testText2 = toCamelCase(sampleString);
  expect(testText1).toBe('');
  expect(testText2).toBe('');
});
