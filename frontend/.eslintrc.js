module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    // 'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['flowtype', 'react', 'prettier'],
  globals: {
    document: false,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'default-case': 'off',
    'func-names': 'off',
    // "implicit-arrow-linebreak": "beside",
    'prettier/prettier': 'error',
  },
  globals: {
    fetch: false,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },
};
