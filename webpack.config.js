const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const assetsPath = path.resolve(__dirname, 'src/assets');
const jsPath = path.resolve(__dirname, 'src/js');
const stylePath = path.resolve(__dirname, 'src/scss');


module.exports = {
	entry: jsPath + '/index.jsx',
	mode: 'production',
	resolve: {
		alias: {
			assets: assetsPath,
			scss: stylePath,
			js: jsPath,
		}
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['./node_modules']
							}
						}
					}
				]
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-syntax-dynamic-import']
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: { outputPath: 's/' }
				}
			},
			{
				test: /\.(ttf|woff2?|eot)$/,
				use: {
					loader: 'file-loader',
					options: { outputPath: 's/' }
				}
			},
		]
	},
	output: {
		filename: 's/[contenthash].js',
		chunkFilename: 's/[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/r%C3%A4kna/',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		port: 8000
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "s/[contenthash].css",
			chunkFilename: "s/[contenthash].css"
        	}),
		new HtmlWebpackPlugin({
			template: assetsPath + '/index.html',
			inject: 'body',
			/*favicon: 'assets/icon.png',*/
			filename: 'index.html',
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'async'
		}),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast 
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true,
			importWorkboxFrom: 'local'
		})
	]
};

