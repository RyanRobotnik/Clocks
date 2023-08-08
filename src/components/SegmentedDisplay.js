import { useEffect, useState } from 'react';
import './SegmentedDisplay.scss';

const segmentsLookup = {
	0: [1, 1, 1, 0, 1, 1, 1],
	1: [0, 0, 1, 0, 0, 1, 0],
	2: [1, 0, 1, 1, 1, 0, 1],
	3: [1, 0, 1, 1, 0, 1, 1],
	4: [0, 1, 1, 1, 0, 1, 0],
	5: [1, 1, 0, 1, 0, 1, 1],
	6: [1, 1, 0, 1, 1, 1, 1],
	7: [1, 0, 1, 0, 0, 1, 0],
	8: [1, 1, 1, 1, 1, 1, 1],
	9: [1, 1, 1, 1, 0, 1, 1],
	default: [0, 0, 0, 0, 0, 0, 0],
	error: [0, 0, 0, 1, 0, 0, 0] // Middle Dash segment on error
};

const SegmentedDisplay = ({ value }) => {
	const [currentDisplay, setCurrentDisplay] = useState(segmentsLookup.default);

	useEffect(() => {
		if (isNaN(value) || value > 9 || value < 0) {
			console.error('Invalid value given to SegmentedDisplay:', value);
			setCurrentDisplay(segmentsLookup.error);
		}
		setCurrentDisplay(segmentsLookup[value]);
	}, [value]);

	return (
		<div className="display">
			{currentDisplay.map((isOn, position) => (
				<div key={position} className={`segment segment--${position} ${isOn ? 'segment--on' : ''}`}></div>
			))}
		</div>
	);
};

export default SegmentedDisplay;
