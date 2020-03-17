
/**
 * Generates a string of a given length from the provided input string.
 *
 * Given the function requires the input string, we can generate alphabetic,
 * with or without upper/lower case, alphanumeric, numeric only, or with
 * especial chars. It all depends on the input provided.
 *
 * @param {string} chars a string or characters to generate the string from
 * @param {number} len the lenth of the generated string
 */
const genStr = (chars, len) => {
  return [...Array(len)]
    .map(() => chars[~~(Math.random() * chars.length)])
    .join('');
};

/**
 * Generates a person's fullname-like string from random chars.
 *
 * @param {number} len The length of the first name and last name
 * @return {string}
 */
const genTwoWords = (len = 5) => {
  const alphabet = 'abcdefghijklmnopqrstuwvxyz';
  return `${genStr(alphabet, len)} ${genStr(alphabet, len)}`;
};

export {
  genStr,
  genTwoWords,
};
