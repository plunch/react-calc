import React, { useState } from 'react';
import Button from './button.jsx';
import Display from './display.jsx';

function Calculator(props) {
	const [input, setInput] = useState("");
	const [error, setError] = useState("");

	function ch(c) {
		setInput((inp, props) => inp + c);
	}

	function equals() {
		try {
			const result = eval(input);
			setInput(result.toString());
		} catch (e) {
			setInput("");
			setError("Bad input");
		}
	}

	function clear() {
		setInput("");
	}

	return (
		<div className="calculator">
			<Display>{input||error||" "}</Display>
			
			<div className="button-row">
				<Button char='(' onAdd={ch} />
				<Button char=')' onAdd={ch} />
				<Button onClick={clear}>C</Button>
				<Button char='/' onAdd={ch} />
			</div>
			<div className="button-row">
				<Button char='7' onAdd={ch} />
				<Button char='8' onAdd={ch} />
				<Button char='9' onAdd={ch} />
				<Button char='*' onAdd={ch} />
			</div>
			<div className="button-row">
				<Button char='4' onAdd={ch} />
				<Button char='5' onAdd={ch} />
				<Button char='6' onAdd={ch} />
				<Button char='+' onAdd={ch} />
			</div>
			<div className="button-row">
				<Button char='1' onAdd={ch} />
				<Button char='2' onAdd={ch} />
				<Button char='3' onAdd={ch} />
				<Button char='-' onAdd={ch} />
			</div>
			<div className="button-row">
				<Button char='0' width="2" onAdd={ch} />
				<Button char='.' onAdd={ch} />
				<Button onClick={equals}>=</Button>
			</div>
		</div>
	);
}

export default Calculator;
