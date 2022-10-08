import { useState } from 'react';

import './App.css';

export default function App() {
	const [currentClip, setCurrentClip] = useState('');

	const handleClick = (e) => {
		document.querySelector(`#${e.target.innerText}`).play();
		setCurrentClip(e.target.id);
	};

	document.addEventListener('keypress', (e) => {
		const padAudio = document.querySelector(`#${e.key.toUpperCase()}`);

		if (padAudio) {
			padAudio.play();
			setCurrentClip(padAudio.parentNode.id);
		}
	});

	return (
		<div id="drum-machine">
			<div id="display">{currentClip.toUpperCase()}</div>
			<div id="pads-container">
				<button id="HEATER1" className="drum-pad" onClick={(e) => handleClick(e)}>
					Q
					<audio
						id="Q"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
					></audio>
				</button>
				<button id="HEATER2" className="drum-pad" onClick={(e) => handleClick(e)}>
					W
					<audio
						id="W"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
					></audio>
				</button>
				<button id="HEATER3" className="drum-pad" onClick={(e) => handleClick(e)}>
					E
					<audio
						id="E"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
					></audio>
				</button>
				<button id="HEATER4" className="drum-pad" onClick={(e) => handleClick(e)}>
					A
					<audio
						id="A"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
					></audio>
				</button>
				<button id="CLAP" className="drum-pad" onClick={(e) => handleClick(e)}>
					S
					<audio
						id="S"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
					></audio>
				</button>
				<button id="OPENHH" className="drum-pad" onClick={(e) => handleClick(e)}>
					D
					<audio
						id="D"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
					></audio>
				</button>
				<button id="KICKNHAT" className="drum-pad" onClick={(e) => handleClick(e)}>
					Z
					<audio
						id="Z"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
					></audio>
				</button>
				<button id="KICK" className="drum-pad" onClick={(e) => handleClick(e)}>
					X
					<audio
						id="X"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
					></audio>
				</button>
				<button id="CLOSEDHH" className="drum-pad" onClick={(e) => handleClick(e)}>
					C
					<audio
						id="C"
						className="clip"
						src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
					></audio>
				</button>
			</div>
		</div>
	);
}
