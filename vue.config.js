const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
        // mode: 'production',
        publicPath: process.env.NODE_ENV === 'production' ?
            '/shop.github.io/' : '/'
    },
    module.exports = {
        css: {
            loaderOptions: {
                sass: {
                    prependData: '@import "@/assets/styles/style.scss";'
                }
            }
        },
        // chainWebpack: (config) => {
        //     config
        //         .module
        //         .rule('image')
        //         .use('url-loader')
        //         .loader('url-loader')
        //         .tap(options => Object.assign({}, options, { name: 'img/[name].[ext]' }))
        //         // .end()
        // },
        configureWebpack: {
            module: {
                rules: [{
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }, ]
            },
            plugins: [
                new CopyWebpackPlugin({
                    patterns: [{
                        from: './src/assets/fonts/',
                        to: './assets/fonts/'
                    }]
                })
            ]
        }
    }