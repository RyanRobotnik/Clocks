import React from 'react';
import './App.scss';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

const App = () => {
	return (
		<div className="app">
			<div className="app-body">
				<AnalogClock />
				<DigitalClock />
			</div>
		</div>
	);
};

export default App;
