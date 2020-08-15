module.exports = (env) => {
    env = env || {};
    return {
        entry:'./src/main.js',
        module:{
            rules:[
                //处理vue结尾的文件
                {test:/\.vue$/,use:"vue-loader"},
                //这里使用的是compose组合函数，读取为从右往左。如果是pipe函数则是从左往右
                //即先执行css-loader解析css，然后再去执行style-loader解析成css规则
                {test:/\.css$/,use:["style-loader","css-loader"]}
            ]
        },
        resolve:{
            //默认扩展名
            extensions:['.js','.json','.vue'],
            alias:{
                vue:'vue/dist/vue.esm'
            }
        },
        //扩展运算符去拷贝内容，简单对象深拷贝，复杂对象浅拷贝
        ...(env.development ? require('./config/webpack.development'):require('./config/webpack.production'))
    }
}
