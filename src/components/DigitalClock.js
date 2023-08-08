import React, { useEffect, useState } from 'react';
import useCurrentDateTime from '../hooks/useCurrentDateTime';
import SegmentedDisplay from './SegmentedDisplay';
import './DigitalClock.scss';

const DigitalClock = () => {
	const currentDateTime = useCurrentDateTime();
	const [timeParts, setTimeParts] = useState({ hours: ['0', '0'], minutes: ['0', '0'], seconds: ['0', '0'] });

	useEffect(() => {
		const hours = currentDateTime.getHours().toString().split('');
		const minutes = currentDateTime.getMinutes().toString().split('');
		const seconds = currentDateTime.getSeconds().toString().split('');

		if (hours.length === 1) {
			hours.splice(0, 0, '0');
		}

		if (minutes.length === 1) {
			minutes.splice(0, 0, '0');
		}

		if (seconds.length === 1) {
			seconds.splice(0, 0, '0');
		}

		setTimeParts({ hours: hours, minutes: minutes, seconds: seconds });
	}, [currentDateTime]);

	return (
		<div className="digital-clock">
			<SegmentedDisplay value={timeParts.hours[0]} />
			<SegmentedDisplay value={timeParts.hours[1]} />
			<div className="colon" />
			<SegmentedDisplay value={timeParts.minutes[0]} />
			<SegmentedDisplay value={timeParts.minutes[1]} />
			<div className="colon" />
			<SegmentedDisplay value={timeParts.seconds[0]} />
			<SegmentedDisplay value={timeParts.seconds[1]} />
		</div>
	);
};

export default DigitalClock;
