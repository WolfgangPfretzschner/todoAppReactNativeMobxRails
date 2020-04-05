module.exports = {
  extends: [
    // 'plugin:flowtype/recommended',
    'plugin:react/recommended',
    // 'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
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
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      react: {
        createClass: 'createReactClass', // Regex for Component Factory to use,
        // default to "createReactClass"
        pragma: 'React', // Pragma to use, default to "React"
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        // default to latest and warns if missing
        // It will default to "detect" in the future
        flowVersion: '0.53', // Flow version
      },
      propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        'forbidExtraProps',
        {property: 'freeze', object: 'Object'},
        {property: 'myFavoriteWrapper'},
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        {name: 'Link', linkAttribute: 'to'},
      ],
    },
  },
};
