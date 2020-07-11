import '../styles/tailwind.css';
import { addDecorator, addParameters } from '@storybook/react';
import Container from '../src/components/container';
import Layout from '../src/layouts/default';
import results from '../tests/.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { configureActions } from '@storybook/addon-actions';

// wrap stories with a tailwindcss Layout/Container
const withTailwindCss = storyFn => (
	<Layout>
		<Container>
			{storyFn()}
		</Container>
	</Layout>
);

// Decorators
addDecorator(withTailwindCss);
addDecorator(withTests({ results }));

// Parameters
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
	options: {
		showRoots: true, // display the nav tree's root node as a headings in the navigation 'STYLEGUIDE'
		// storySort: (a, b) =>
		// 	a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
});

// Limit the number of actions that will be logged to the actions panel
configureActions({
	depth: 10,
	clearOnStoryChange: true,
	limit: 50,
  });