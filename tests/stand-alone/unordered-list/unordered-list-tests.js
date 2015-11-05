import assert from 'assert';
import UnorderedList from './unordered-list';
import ReactTester from '../../../src/index';

const tester = ReactTester.create().use(UnorderedList);
const i18n = {
  help: 'test help',
  something: 'test something',
};
const NO_LINKS = tester.addFlavour('NO_LINKS', {
  i18n,
  links: [],
});
const WITH_LINKS = tester.addFlavour('WITH_LINKS', {
  i18n,
  links: [
    {
      title: 'title-1',
      text: 'text-1',
    },
    {
      title: 'title-2',
      text: 'text-2',
    },
  ],
});

describe('unordered list should', () => {
  it('render the first anchor with the expected title with no dynamic links', () => {
    const actual = NO_LINKS.findChild('0.0').props.title;
    const expected = 'test help';

    assert.deepEqual(actual, expected);
  });

  it('render the first anchor with the expected value with no dynamic links', () => {
    const actual = NO_LINKS.findChild('0.0').value;
    const expected = 'test help';

    assert.deepEqual(actual, expected);
  });

  it('render the dynamic links', () => {
    const actual = WITH_LINKS.countComponents('li');
    const expected = 4;

    assert.deepEqual(actual, expected);
  });

  it('render the first dynamic link with the expected text', () => {
    const actual = WITH_LINKS.findChild('2').value;
    const expected = 'text-1';

    assert.deepEqual(actual, expected);
  });

  it('render the second dynamic link with the expected text', () => {
    const actual = WITH_LINKS.findChild('3').value;
    const expected = 'text-2';

    assert.deepEqual(actual, expected);
  });
});