import path from 'path';
import webpack from 'webpack';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  //debug: true,
  devtool: 'source-map',
  //noInfo: false,
  entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
	},
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
	},
	optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
		],
		splitChunks: {
			name: 'vendor'
		}
  },
  plugins: [
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css'
	}),
	//add hassh to our bundles
	new webpackMd5Hash(),

	new webpack.LoaderOptionsPlugin({
		debug: true,
		noInfo: false,
	}),

	new HtmlWebpackPlugin({
		template: './src/index.html',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true
		},
		// Properties you define here are available in index.html
    // using htmlWebpackPlugin.options.varName
		trackJSToken: "1f35caa8fc124cfab1f731d7947e8672",
		inject: true
	}),

  ],
  module: {
    rules: [
    {
		test:/\.js$/,
		exclude:/node_modules/,
		loader:'babel-loader'
		},
    {
		test:/\.css$/,
		loader: [ MiniCssExtractPlugin.loader, 'css-loader']
		}
    ]
  }
}
