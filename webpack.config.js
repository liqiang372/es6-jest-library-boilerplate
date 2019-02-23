const path = require('path');

module.exports = (env) => {
  const fileName = env.production ? 'bundle.min.js' : 'bundle.js';
  const mode = env.production ? 'production' : 'development';
  const config = {
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: fileName,
      library: 'miso',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js']
    }
  }
  return config;
};