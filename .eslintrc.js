const path = require('path');
const pkg = require('./package.json');

const aliases = Object.entries(
  pkg._moduleAliases,
).map((e) => [e[0], path.resolve(__dirname, e[1])]);

module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': ['error', {
      allow: ['_id', '_moduleAliases', '_rawData'],
    }],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: aliases,
        extensions: ['.js', 'json'],
      },
    },
  },
};
