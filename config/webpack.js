var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('./../../styles/app/styles.css')

var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractCSS,

    /* Copy sails.io.js unmolested: */
    new CopyWebpackPlugin([
    {
        from: 'assets/js/dependencies',
        to: 'dependencies',
        force: true
    },
    {
        from: 'assets/js/vendor',
        to: 'vendor',
        force: true
    },
    {
        from: 'assets/images',
        to: 'images',
        force: true
    },
    {
        from: 'assets/fonts',
        to: 'fonts',
        force: true
    }
    ]),
]

if (process.env.NODE_ENV == 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: true }
    }))
}

var entries = [path.resolve(__dirname, '../assets/js/index.js')]
if (process.env.NODE_ENV !== 'production') entries.push( 'webpack-hot-middleware/client' )

// compile js assets into a single bundle file
module.exports.webpack = {
  options: {
    context: path.join(__dirname, '..'),

    devtool: 'eval',

    entry: entries,

    output: {
      path: path.resolve(__dirname, '../.tmp/public/js/app'),
      publicPath: "/",
      filename: 'bundle.js'
    },

    plugins: plugins,

    resolve: {
        root: path.resolve(__dirname, '../assets'),
        alias: {
            containers: 'js/containers',
            components: 'js/components',
            customer: 'js/containers/Customer',
            home: 'js/containers/Home',
            actions: 'js/actions',
            reducers: 'js/reducers',
            icons: 'js/icons',
            services: 'js/services',
            settings: 'js/settings',
            utils: 'js/utils',
            styles: 'styles'
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },

    externals: {
        "React": "React",
        "./React": "React",
        "react": "React",
        "window.react": "React",
        "window.React": "React",
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        "react-dom": "ReactDOM",
        "react-router" : "ReactRouter",
        "history" : "History"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: process.env.NODE_ENV == 'production' ?  extractCSS.extract(['css','sass']) : 'style!css?sourceMap!sass?sourceMap&sourceComments'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
  },

  watchOptions: {
    aggregateTimeout: 300
  }
};
