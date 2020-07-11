import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a text block with it's specified tailwindcss class
 */
const TypographyBlock = function ({ text, twClass }) {
	return (
		<div className="mb-6">
			<p className="text-sm text-gray-600">.{twClass}</p>
			<p className={twClass}>{text}</p>
		</div>
	);
};

TypographyBlock.propTypes = {

	/**
	 * The sample text to display
	 */
	text: PropTypes.string,

	/**
	 * The tailwindcss class to decorate the sample text
	 */
	twClass: PropTypes.string
};

TypographyBlock.defaultProps = {
	text: 'The quick brown fox jumps over the lazy dog',
	twClass: 'text-base font-normal leading-normal tracking-normal'
};

export default TypographyBlock;
