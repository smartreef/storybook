import React from 'react';
import { action } from '@storybook/addon-actions';
import ColourSwatch from './';

/*
 * Loads in the MDX markup into the `Docs` tab for every story when { docs: {page: mdx } } is added to the story parameters
 * import mdx from './swatch.docs.mdx';
 */

// Load into the Notes panel
import techNotes from './swatch.notes.tech.md';
import designNotes from './swatch.notes.design.md';

// Story metadata
export default {
	component: ColourSwatch,
	excludeStories: /.*Data$/,
	parameters: {
		componentSubtitle: 'Primary use: styleguide colour palette',
		// Docs: { page: mdx },
		jest: ['swatch.test.js'],
		notes: {
			Design: designNotes,
			Tech: techNotes
		}
	},
	subcomponents: {},
	title: 'Components/Styleguide/Colours'
};

// Story controls
export const Swatch = args =>
	<ColourSwatch {...args} />;

// Story args
Swatch.args = {
	label: 'Black',
	onClick: action('clicked'),
	sublabel: '#000000',
	twClass: 'bg-black'
};
