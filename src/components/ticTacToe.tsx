import "./ticTacToe.css";
import { useEffect, useState } from "react";

type TicTacToeArgs = {
	symbol: string;
	isFilled: boolean;
};

const TicTacToe = () => {
	const basicGrid = {
		"10": { symbol: "", isFilled: false },
		"11": { symbol: "", isFilled: false },
		"12": { symbol: "", isFilled: false },
		"20": { symbol: "", isFilled: false },
		"21": { symbol: "", isFilled: false },
		"22": { symbol: "", isFilled: false },
		"30": { symbol: "", isFilled: false },
		"31": { symbol: "", isFilled: false },
		"32": { symbol: "", isFilled: false },
	};

	const [message, setMessage] = useState<string>("");
	const [currentSymbol, setCurrentSymbol] = useState<"O" | "X">("O");
	const [rows, setRows] = useState<Record<string, TicTacToeArgs>>(basicGrid);

	const handleOnClickCapture = (row: string) => {
		if (rows[row].isFilled === true) return;
		rows[row].symbol = currentSymbol;
		rows[row].isFilled = true;
		setRows({ ...rows });
		setCurrentSymbol(currentSymbol === "O" ? "X" : "O");
	};

	const resetGame = () => {
		setRows(basicGrid);
		setCurrentSymbol("O");
		setMessage("");
	};

	useEffect(() => {
		const combinations: Record<string, Array<string>> = {
			A: ["10", "11", "12"],
			B: ["10", "20", "30"],
			C: ["11", "21", "31"],
			D: ["12", "22", "32"],
			E: ["20", "21", "22"],
			F: ["30", "31", "32"],
			G: ["10", "21", "32"],
			H: ["30", "21", "12"],
		};

		for (const combination of Object.values(combinations)) {
			if (
				rows[combination[0]].symbol &&
				rows[combination[1]].symbol &&
				rows[combination[2]].symbol &&
				rows[combination[0]].symbol === rows[combination[1]].symbol &&
				rows[combination[0]].symbol === rows[combination[2]].symbol &&
				rows[combination[1]].symbol === rows[combination[2]].symbol
			) {
				setMessage(`Player ${rows[combination[0]].symbol} won`);
			}
		}
	}, [rows]);

	return (
		<>
			<div id="tic-tac-toe">
				<p>{message}</p>
				<button type="button" onClick={resetGame}>
					Reset the Game
				</button>
				<div id="tic-tac-toe_grid">
					{Object.keys(rows).map((row) => (
						<span key={row} onClickCapture={() => handleOnClickCapture(row)}>
							{rows[row].symbol}
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default TicTacToe;
