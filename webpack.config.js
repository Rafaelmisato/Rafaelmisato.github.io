const path = require('path');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules, threeJS/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			]
		}
	};

