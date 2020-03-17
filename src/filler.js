import {
  guessType,
} from './guesser';

import * as Gen from './lib/gen-data';

/**
 * Maps the type of a field to its attribute.
 *
 * @var {object} attrMap
 */
const attrMap = {
  text: {
    attr: 'value',
    event: 'change',
    genFn: 'genTwoWords',
  },
};


/**
 * Fills a form input field with appropriate data.
 *
 * @param {HTMLFormElement} field - The input field to be filled.
 * @return {HTMLFormElement}
 */
const fillField = (field, value) => {
  const { attr, event, genFn } = attrMap[guessType(field)];

  //
  // @TODO: Use a function to generate random values as appropriate
  // when an explicit value was not provided.
  //
  field.setAttribute(attr, value || Gen[genFn]());
  field.dispatchEvent(new Event(event));
};


export {
  fillField,
};

