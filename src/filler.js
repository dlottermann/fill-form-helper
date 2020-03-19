import {
  guessType,
} from './guesser';

import {
  capitalizeWords,
} from './lib/string-helpers';

import * as Gen from './lib/gen-data';

/**
 * Maps the type of a field to its attribute.
 *
 * @var {object} attrMap
 */
const attrMap = {
  text: {
    type: 'text',
    attr: 'value',
    event: 'change',
    genFn: 'genTwoWords',
  },
  email: {
    type: 'email',
    attr: 'value',
    event: 'change',
    genFn: 'genEmail',
  },
};

const verifyCapitalization = (type, str) => {
  if (type !== 'text') return str;
  return capitalizeWords(str);
};

/**
 * Fills a form input field with appropriate data.
 *
 * @param {HTMLFormElement} field - The input field to be filled.
 * @return {HTMLFormElement}
 */
const fillField = (field, value) => {
  const {
    type,
    attr,
    event,
    genFn,
  } = attrMap[guessType(field)];

  const val = value || verifyCapitalization(type, Gen[genFn]());

  field.setAttribute(attr, val);
  field.dispatchEvent(new Event(event));
};


export {
  fillField,
  verifyCapitalization,
};
