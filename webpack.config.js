const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
const NODE_PORT = process.env.NODE_PORT || 8090;

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: getEntrySources(['./client/main.js']),
    output: {
        path: __dirname + '/public/build',
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: (process.env.NODE_ENV === "production")
                            ? ExtractTextPlugin.extract('style', 'css!autoprefixer')
                            : "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: (process.env.NODE_ENV === "production")
                            ? ExtractTextPlugin.extract('style', 'css!less!autoprefixer')
                            : "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loaders: [
                    'file?name=[sha512:hash:base64:7].[ext]',
                    'image-webpack?progressive=true&optimizationLevel=7&interlaced=true'
                ],
                exclude: [/node_modules/, /public/, /client\/fonts/]
            },
            {
                test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file?name=[name].[ext]',
                exclude: [/node_modules/, /public/, /client\/img/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "stage-0", "react"],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css', {
            allChunks: true,
            disable: process.env.NODE_ENV == 'development'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    devServer: {
        host: NODE_HOST,
        port: NODE_PORT,
        colors: true,
        debug: true,
        hot: true,
        devtool: true,
        historyApiFallback: true,
        "eval-source-map": true,
        "eval-source-map": true,
        inline: true,
        contentBase: __dirname + '/public',
    },
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.unshift('react-hot-loader/patch');
        sources.unshift(`webpack-dev-server/client?http://${NODE_HOST}:${NODE_PORT}`);
        sources.unshift('webpack/hot/only-dev-server');
    }

    return sources;
}
