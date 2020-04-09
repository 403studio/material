const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('packages', resolve('packages'))
      .set('examples', resolve('examples'))

    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, './build/md-loader/index.js'))

    config.module
      .rule('eslint')
      .exclude.add(resolve('examples'))
  }
}
