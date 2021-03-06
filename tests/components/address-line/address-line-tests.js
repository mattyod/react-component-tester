import assert from 'assert';
import AddressLine from './address-line';
import ReactTester from '../../../src/index';

const tester = ReactTester.create().use(AddressLine);
const NOTHING = tester.addFlavour('NOTHING', {});
const SOMETHING = tester.addFlavour('SOMETHING', {
  text: 'some line of the address',
});

describe('line should', () => {
  it('render nothing if no line is given', () => {
    const value = NOTHING.findChild('0');
    const actual = typeof value;
    const expected = 'undefined';

    assert.deepEqual(actual, expected);
  });

  it('render the given text', () => {
    const actual = SOMETHING.findChild('0').value;
    const expected = 'some line of the address';

    assert.deepEqual(actual, expected);
  });
});
