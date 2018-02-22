const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'less-loader',
				]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			}
		],
	},
	devServer: {
		contentBase: './dist',
	}
}