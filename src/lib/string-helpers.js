
/**
 * @var {string}
 */
export const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';

/**
 * @var {string}
 */
export const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * @var {string}
 */
export const digits = '0123456789';

export const alphabet = `${alphabetLower}${alphabetUpper}`;

/**
 * @var {string}
 */
export const alphaNum = `${alphabet}${digits}`;

/**
 * Capitalizes first letter of each word in ‘str’.
 *
 * @param {string} str
 * @return {string}
 */
export const capitalizeWords = (str) => {
  return str.replace(/(^|\s)./g, (c) => {
    return c.toUpperCase();
  });
};

