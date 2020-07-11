import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a colour swatch with its name and hex value.
 * Customise the onClick() event with your own function.
 */
const ColourSwatch = function ({ label, sublabel, twClass, onClick }) {
	const opts = { class: 'h-12 w-12 rounded-lg shadow-inner' };

	opts.class = `${opts.class} ${twClass}`;

	return (
		<div className="flex items-center mt-5" onClick={() => { onClick(sublabel); }}>
			<div {...opts}></div>
			<div className="ml-2 text-gray-800 text-xs leading-none pl-1">
				<div className="font-semibold">{label}</div>
				<div className="mt-1 font-normal opacity-75">{sublabel}</div>
			</div>
		</div>
	);
};

ColourSwatch.propTypes = {

	/**
	 * Use to display the name of the colour
	 */
	label: PropTypes.string,

	/**
	 * A function that is triggered when the swatch is clicked
	 */
	onClick: PropTypes.func,

	/**
	 * Use to display the hex value of the colour
	 */
	sublabel: PropTypes.string,

	/**
	 * The tailwindcss class of the colour swatch
	 */
	twClass: PropTypes.string
};

ColourSwatch.defaultProps = {
	label: 'Black',
	sublabel: '#000000',
	twClass: 'bg-black'
};

export default ColourSwatch;
