const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    //三种模式：none(不压缩) production(压缩，生产环境) development（不压缩，开发环境）
    mode:'production',
    //打包输出路径
    output:{
        path:path.resolve(__dirname,'../build'),
        filename:'bundle.min.js'
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