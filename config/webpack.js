var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('./../../styles/app/styles.css')

var plugins = [
    new webpack.NoErrorsPlugin(),
    extractCSS,
    new webpack.HotModuleReplacementPlugin(),

    /* Copy sails.io.js unmolested: */
    new CopyWebpackPlugin([
    {
        from: 'assets/js/dependencies',
        to: 'dependencies',
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
        root: path.resolve(__dirname, '..'),
        alias: {
            containers: 'assets/js/containers',
            components: 'assets/js/components',
            customer: 'assets/js/containers/Customer',
            home: 'assets/js/containers/Home',
            actions: 'assets/js/actions',
            reducers: 'assets/js/reducers',
            icons: 'assets/js/icons',
            services: 'assets/js/services',
            settings: 'assets/js/settings',
            utils: 'assets/js/utils',
            styles: 'assets/styles',
            schemas: 'api/schemas'
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
