import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
	component: Button,
	title: 'Components/Buttons/Button'
};

// Story controls
export const Emoji = args =>
	<Button {...args}>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>;


// Story args
Emoji.args = { onClick: action('clicked') };
