import { useCallback, useEffect, useState } from "react";

const ColorPicker = () => {
	const [response, setResponse] = useState<string>("");
	const [currentColor, setCurrentColor] = useState<string>("");
	const [colorCollection, setColorCollection] = useState<Array<string>>([]);

	const getRandomColor = useCallback(() => {
		let color = "#";
		const characters = "0123456789ABCDEF";

		for (let i = 0; i < 6; i++) {
			color += characters[Math.floor(Math.random() * 16)];
		}

		return color;
	}, []);

	const getRandomColorCollection = useCallback(() => {
		const colors = [getRandomColor(), getRandomColor(), getRandomColor()];
		const condition = Math.floor(Math.random() * colors.length);

		setColorCollection(colors);
		setCurrentColor(colors[condition]);
	}, [getRandomColor]);

	const customStyles = {
		backgroundColor: currentColor,
		width: "5rem",
		height: "5rem",
	};

	const handleClick = (randomColor: string) => {
		if (randomColor === currentColor) {
			setResponse("Correct");
			getRandomColorCollection();
		} else {
			setResponse("Wrong");
		}
	};

	useEffect(() => {
		getRandomColorCollection();
	}, [getRandomColorCollection]);

	return (
		<>
			<div id="box" style={customStyles} />
			{colorCollection.map((randomColor) => (
				<button
					key={randomColor}
					type="button"
					onClick={() => handleClick(randomColor)}
				>
					{randomColor}
				</button>
			))}
			<p>{response}</p>
		</>
	);
};

export default ColorPicker;
