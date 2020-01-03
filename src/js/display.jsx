import React from 'react';

function Display(props) {
	return (
		<pre
			className="display"
			>
			{props.children}
		</pre>
	);
}

export default Display;
