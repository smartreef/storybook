module.exports = {
	plugins: ['babel-plugin-react-require'],
	presets: [
		[
			'@babel/preset-env',
			{ targets: { node: 'current' } }
		],
		[
			'@babel/preset-react',
			{}
		]
	]
};
