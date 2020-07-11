module.exports = {
	plugins: [],
	purge: [
		'./src/components/**/index.js',
		'./src/elements/**/index.js'
	],
	theme: {
		borderWidth: {
			0: '0',
			2: '2px',
			4: '4px',
			default: '1px'
		},
		extend: {
			colors: { cyan: '#9cdbff' },
			spacing: {
				96: '24rem',
				128: '32rem'
			}
		},
		fontFamily: {
			body: [
				'Graphik',
				'sans-serif'
			],
			display: [
				'Gilroy',
				'sans-serif'
			]
		},
		screens: {
			lg: '1024px',
			md: '768px',
			sm: '640px',
			xl: '1280px'
		}
	},
	variants: {}
};
