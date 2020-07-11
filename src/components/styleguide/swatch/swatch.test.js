import React from 'react';
import renderer from 'react-test-renderer';
import ColourSwatch from './';

it('match snapshot', () => {
	const component = renderer.create(<ColourSwatch />);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
