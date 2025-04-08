import { useState } from "react";

import "./tic-tac-toe.css";

const TicTacToe = () => {
	const [character, setCharacter] = useState<string>("X");
	const [positions, setPositions] = useState<Record<string, string>>({
		"10": "",
		"11": "",
		"12": "",
		"20": "",
		"21": "",
		"22": "",
		"30": "",
		"31": "",
		"32": "",
	});

	const fillPosition = (data: unknown) => {
		setPositions({ ...positions, [data.target.id]: character });
		setCharacter(character === "O" ? "X" : "O");
	};

	return (
		<>
			<div id="tic-tac-toe">
				{Object.keys(positions).map((position) => {
					return (
						<span
							id={position}
							className="tic-tac-toe_position"
							onClickCapture={fillPosition}
							key={position}
						>
							{positions[position]}
						</span>
					);
				})}
			</div>
		</>
	);
};

export default TicTacToe;
