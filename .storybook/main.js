// Customise - story locations, addons, webpack
// https://storybook.js.org/docs/configurations/custom-webpack-config/
module.exports = {
	stories: [
		'../src/components/**/*.stories.@(js|mdx)',
		'../src/elements/**/*.stories.@(js|mdx)',
		'../stories/**/*.stories.@(js|mdx)'
	],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-jest/register',
		'@storybook/addon-docs',
		'@storybook/addon-notes/register',
		'@storybook/addon-storysource',
		'@storybook/addon-controls',
		'@storybook/addon-viewport',
	],
	webpackFinal: async (config) => {
		config.resolve.alias = Object.assign(
			config.resolve.alias,
			{
				"@/src/components/*": "src/components/*",
				"@/src/elements/*": "src/elements/*",
				"@/src/layouts/*": "src/layouts/*",
				"@/styles/*": "styles/*",
				"@/tests/*": "tests/*"
			}
		);

		// Return the altered config
		return config;
	},
};
