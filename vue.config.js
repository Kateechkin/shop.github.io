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
    }
