const webpack = require('webpack');

/**
 * By default environment will be production and debug will be false
 */
const mode = process.env.NODE_ENV || 'production';
//const debug = mode !== 'production';

const S_PATH = __dirname + '/public/src';

module.exports = {
  mode: mode,
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  entry : ['regenerator-runtime/runtime', S_PATH],
  output: {
    path : __dirname + '/public' + '/static/js',
    filename : 'bundle.js'
  },
  plugins: [new webpack.LoaderOptionsPlugin({ options: {} })],
  module : {
    rules : [
      {
        test : /\.js$/,
        loader: 'babel-loader',
        include: S_PATH,
        exclude: /node_modules/,
        query: {presets : ['@babel/react', '@babel/preset-env']}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
        include: S_PATH
      }
    ]
  }
};
