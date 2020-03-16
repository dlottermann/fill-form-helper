
//
// https://jestjs.io/docs/en/configuration#coveragethreshold-object
//
module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -6,
    },
  },
};

