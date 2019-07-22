import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  //debug: true,
  devtool: 'inline-source-map',
  //noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
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
		loader:[ 'style-loader', 'css-loader' ]
		}
    ]
  }
}
