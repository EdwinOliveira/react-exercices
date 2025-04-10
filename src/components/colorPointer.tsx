import { useState } from "react";
import "./colorPointer.css";

type Coordinate = {
	coordinateX: number;
	coordinateY: number;
};

const ColorPointer = () => {
	const [coordinates, setCoordinates] = useState<Array<Coordinate>>([]);

	const handleClickCapture = ({ coordinateX, coordinateY }: Coordinate) => {
		const foundCoordinate = coordinates.find(
			(coordinate) =>
				coordinate.coordinateX === coordinateX &&
				coordinate.coordinateY === coordinateY,
		);

		if (foundCoordinate !== undefined) return;
		setCoordinates([...coordinates, { coordinateX, coordinateY }]);
	};

	return (
		<>
			<div
				id="color-pointer"
				onClickCapture={({ clientX, clientY }) =>
					handleClickCapture({
						coordinateX: clientX,
						coordinateY: clientY,
					})
				}
			>
				{coordinates.map(({ coordinateX, coordinateY }) => (
					<span
						className="coordinate"
						style={{ top: `${coordinateY}px`, left: `${coordinateX}px` }}
						key={coordinateX + coordinateY}
					/>
				))}
			</div>
		</>
	);
};

export default ColorPointer;
