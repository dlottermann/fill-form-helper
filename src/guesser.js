/**
 * Creates an object of key/value pairs for known form element types,
 * like ‘text’, ‘email’, ‘checkbox’, ‘tel’, etc.
 *
 * @param {array<string>}
 * @return {object}
 */
const validTypes = (function buildValidTypesObject(types) {
  return types.reduce((acc, t) => ({ ...acc, [t]: t }), {});
}([
  'text',
  'email',
  'tel',
  'checkbox',
  'radio',
]));

/**
 * Tries to figure out the element's type.
 *
 * Defaults to type ‘text’ if no valid type can be detected.
 *
 * @param {HTMLFormElement} elem
 * @return {string}
 */
export const guessType = (elem) => {
  return validTypes[elem.type] || 'text';
};

