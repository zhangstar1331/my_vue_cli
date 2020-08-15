const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    //开发模式，在内存里维护，不需要压缩和生成打包文件
    mode:"development",
    output:{
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            //模版文件
            template:"public/index.html",
            //文件名
            filename:"index.html"
        }),
        new vueLoaderPlugin()
    ]
}