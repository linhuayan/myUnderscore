const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",

	// 配置出口
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						babelrc: false,
						presets: [[require.resolve("@babel/preset-env"), { modules: false }]],
						cacheDirectory: true,
					},
				},
			},
		],
	},

	plugins: [
		new htmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html",
			inject: true,
		}),
	],

  devServer: {
    host: 'localhost',
    port: 8889
  }
};
