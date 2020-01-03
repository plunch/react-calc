import React from 'react';

export default function Counter(props) {
	function handleAdd() {
		if (props.onUpdate)
			props.onUpdate(props.num + 1);
	}

	function handleSub() {
		if (props.onUpdate)
			props.onUpdate(props.num - 1);
	}

	return (
	<div>
		<button onClick={handleSub}>-</button>
		<button onClick={handleAdd}>+</button>
		&nbsp;
		<span>{props.num}</span>
	</div>
	);
}
