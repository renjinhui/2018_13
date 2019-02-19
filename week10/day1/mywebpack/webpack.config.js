let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin')
// console.log(__dirname);
// console.log('==========================');
// console.log(path.resolve(__dirname,'dist'));
// export default {
module.exports = {
    mode:'development',
    entry:'./src/index.js', //打包的入口文件
    output:{
        path:path.resolve(__dirname,'dist'),// 绝对路径
        filename:'haha.js'
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}