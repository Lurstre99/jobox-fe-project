module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'Jobox - BMF Attorneys';
        return args;
      });
    config
      .plugin('gzip-compression')
      .use('compression-webpack-plugin');
  },
  pluginOptions: {
    compression: {
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      },
    },
  },
  devServer: {
    https: true,
    disableHostCheck: true,
    port: 8080,
    public: 'https://localhost:8080',
  },
  publicPath: '/',
  integrity: true,
};
