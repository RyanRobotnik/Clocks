import React from 'react';
import useCurrentDateTime from '../hooks/useCurrentDateTime';
import './AnalogClock.scss';

const AnalogClock = () => {
	const currentDateTime = useCurrentDateTime();

	return (
		<div className="analog-clock">
			<div
				className="hand hand--hour"
				style={{
					transform: `rotateZ(${currentDateTime.getHours() * 30}deg)`
				}}
			/>
			<div
				className="hand hand--minute"
				style={{
					transform: `rotateZ(${currentDateTime.getMinutes() * 6}deg)`
				}}
			/>
			<div
				className="hand hand--second"
				style={{
					transform: `rotateZ(${currentDateTime.getSeconds() * 6}deg)`
				}}
			/>
		</div>
	);
};

export default AnalogClock;
