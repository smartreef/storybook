module.exports = {
	moduleNameMapper: { '\\.(css|,scss)$': '<rootDir>/node_modules/jest-css-modules' },
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
		'^.+\\.md?$': 'markdown-loader-jest',
		'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
	},
	verbose: true
};
