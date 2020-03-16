/**
 * Checks whether the current env is one of the given envs.
 *
 * @param {string} currEnv
 * @param  {...string} envsAllowed
 */
function isAllowedEnv(currEnv, ...envsAllowed) {
  return envsAllowed.includes(currEnv);
}

/**
 * @var {string}
 */
const ENV = process.env.NODE_ENV;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'jest',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    //
    // One empty line at the end of files is OK. Come on!
    //
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    //
    // On dev and testing, we want to allow console statements.
    //
    'no-console': isAllowedEnv(ENV, 'development', 'test') ? 'off' : 'error',

    'no-debugger': isAllowedEnv(ENV, 'development', 'test') ? 'off' : 'error',

    //
    // On dev and testing, we want to allow unused vars.
    //
    'no-unused-vars': isAllowedEnv(ENV, 'development', 'test') ? 'off' : 'error',

    //
    // Some files will have other exports later and then will have
    // to find and change imports across the project. Let's disable this
    //
    'import/prefer-default-export': 'off',

    //
    // It is okay to have code that just returns a value, but still uses a
    // normal function body:
    //
    //    const fn = (val) => {
    //      return val.toString();
    //    };
    //
    // We don't need to make it mandatory to write it as:
    //
    //    const fn = (val) => val.toString();
    //
    'arrow-body-style': [0, 'never'],
  },
};

