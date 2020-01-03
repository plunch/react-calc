import React, { useEffect } from 'react';
import Calculator from './calculator.jsx';


function App(props) {
	useEffect(() => document.title = "Räkna med react");

	return <Calculator />;
}

export default App;
