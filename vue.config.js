const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  publicPath: './',
  outputDir: 'app',
  assetsDir: '',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false,
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    config.plugin('html').tap((args) => {
      args[0].chunksSortMode = 'none';
      return args;
    });
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'));
  },
  configureWebpack: (config) => {
    const plugins = [];
    if (IS_PROD) {
      // plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       mangle: false,
      //       output: {
      //         beautify: true,
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true,
      //   })
      // )
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  devServer: {
    open: IS_PROD,
    host: '0.0.0.0',
    port: 9090,
    https: false,
    hotOnly: false,
  },
};
