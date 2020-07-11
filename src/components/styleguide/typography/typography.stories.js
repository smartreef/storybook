import React from 'react';
import TypographyBlock from './';

// Load into the Notes panel
import techNotes from './typography.notes.tech.md';
import designNotes from './typography.notes.design.md';

// Story metadata
export default {
	component: TypographyBlock,
	excludeStories: /.*Data$/,
	parameters: {
		componentSubtitle: 'Primary use: styleguide typography examples',
		jest: ['typography.test.js'],
		notes: {
			Design: designNotes,
			Tech: techNotes
		}
	},
	subcomponents: {},
	title: 'Components/Styleguide/Typography Block'
};

// Story controls
export const Block = args =>
	<TypographyBlock {...args} />;

// Story args
Block.args = { };
