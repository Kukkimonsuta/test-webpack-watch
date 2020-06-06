module.exports = {
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [
					'css-loader',
					'less-loader'
				],
			},
		],
	},
};