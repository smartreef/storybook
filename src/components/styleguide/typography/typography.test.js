import React from 'react';
import renderer from 'react-test-renderer';
import TypographyBlock from './';

it('match snapshot', () => {
	const component = renderer.create(<TypographyBlock />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
