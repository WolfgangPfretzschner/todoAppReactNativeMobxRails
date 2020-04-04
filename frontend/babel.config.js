const path = require('path');

const paths = {
  assets: path.resolve(__dirname, 'src/assets'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.android.js', '.ios.js', '.web.js'],
          root: ['./src'],
          alias: paths,
        },
      ],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
    ],
  };
};