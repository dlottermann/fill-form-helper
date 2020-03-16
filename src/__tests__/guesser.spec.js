/* eslint-disable no-param-reassign */

import {
  guessType,
} from '../guesser';

const makeField = (doc, fieldStr) => {
  doc.body.innerHTML = `
  <form>
    ${fieldStr}
  </form>
  `;

  return doc.forms[0].firstElementChild;
};

describe('guesser.js', () => {
  it('should guess type text', () => {
    const field = makeField(
      document,
      '<input type="text" name="fullname" />',
    );
    expect(guessType(field)).toEqual('text');
  });

  it('should guess type email', () => {
    const field = makeField(
      document,
      '<input type="email" name="email" />',
    );
    expect(guessType(field)).toEqual('email');
  });

  it('should guess non provided type as text', () => {
    const field = makeField(
      document,
      '<input name="answer" />',
    );
    expect(guessType(field)).toEqual('text');
  });

  it('should guess non standard type as text', () => {
    const field = makeField(
      document,
      '<input type="what-the-poop-💩" name="mighty-poop" />',
    );

    expect(guessType(field)).toEqual('text');
  });

  it('should gues type tel', () => {
    const field = makeField(document, '<input type="tel" name="telephone" />');
    expect(guessType(field)).toEqual('tel');
  });

  it('should guess type checkbox', () => {
    const field = makeField(document, '<input type="checkbox" name="female" />');
    expect(guessType(field)).toEqual('checkbox');
  });

  it('should guess type radio', () => {
    const field = makeField(
      document,
      '<input type="radio" name="gender" value="female" />',
    );

    expect(guessType(field)).toEqual('radio');
  });
});

