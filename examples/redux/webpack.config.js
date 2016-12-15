var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var APP_PATH = path.resolve(__dirname,'./index.js');
var BUILD_PATH = path.resolve(__dirname, './js');
var TMP_PATH = path.resolve(__dirname,'./index.html');

module.exports = {
  entry: {
    app: APP_PATH, 
    vendor: ['es5-shim','es5-shim/es5-sham','console-polyfill','react','react-dom'] 
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js' //输出js
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
	new CopyWebpackPlugin([{"from": path.resolve(__dirname,'api'), "to":"api"}]),
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename: 'vendor.js'}),
    new webpack.optimize.UglifyJsPlugin({ 
        minimize: true,
        compress:{
            warnings: false,
            drop_debugger: true,
            drop_console: true
        }
    }), 
    new HtmlWebpackPlugin({
        title: 'similar-react-router',
        template: TMP_PATH,
        filename: 'index.html',
        chunks: ['app','vendor'],
        inject: 'body'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
      //browser: 'chromium-browser' // mac调试时需要注释该行
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0' ], // ie8调试时，去掉,presets[]=react-hmre
      exclude: /node_modules/
    },{
        test: /\.less$/,
        loaders: ['style','css','less']
    }
    ]
  }
};