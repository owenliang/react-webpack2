const path = require("path"); // 处理文件路径的标准库
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // CSS提取插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML生成插件

// webpack.config.js模块导出的所有符号（webpack配置信息）
// 参考：https://webpack.js.org/configuration/
module.exports = {
    // 单页应用入口
    entry: {
        index: './src/index.js'
    },

    // 编译输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),          // 保存路径
        filename: 'js/[name].[chunkhash].bundle.js',    // js文件名
    },

    // 测试服务器配置
    devServer: {
        port: 8080,             // 监听端口
        compress: true,         // gzip压缩
    },

    // 模块配置
    module: {
        rules: [
            // es6语法转换
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: [
                        ["transform-object-rest-spread"],
                        ["transform-runtime"]
                    ]
                }
            },
            // css编码与提取
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules"
                })
            },
            // 图片内联与编码
            {
                // 小于1KB的图片使用base64内联
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=1024&name=./image/[name].[hash].[ext]' // 图片提取到images目录
            }
        ]
    },

    // 插件配置
    plugins: [
        // CSS提取插件
        new ExtractTextPlugin("css/[name].[contenthash].bundle.css"),
        // HTML生成插件
        new HtmlWebpackPlugin({
            title: '',
            filename : 'index.html',
            inject: 'body', // bundle.[js|css]注入到body部分
            template: './src/index.html', // 基于模板文件生成
            chunks: ['index'] // entry中定义的入口chunk
        }),
    ],
};