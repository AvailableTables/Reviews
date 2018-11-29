var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

const env = {

    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.js?/,
          loader: 'babel-loader'
        }
      ]
    }

};


const cli = {

    entry: `${SRC_DIR}/server.jsx`,
    target: 'node',
    output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.js?/,
          loader: 'babel-loader'
        }
      ]
    }

};

module.exports = [client, server];