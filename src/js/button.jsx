import React from 'react';

function Button(props) {
	var className = "button";

	if (props.width)
		className += " span-" + props.width;

	function handleClick(e) {
		if (props.onClick)
			props.onClick(e);

		if (props.char && props.onAdd)
			props.onAdd(props.char);
	}

	return (
		<button
			className={className}
			onClick={handleClick}
			>
			{props.char || props.children}
		</button>
	);
}

export default Button;
