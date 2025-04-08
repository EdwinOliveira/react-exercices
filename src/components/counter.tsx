import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div id="counter">
				<p>Your current count is: {count}</p>

				<button type="button" onClick={() => setCount(count + 1)}>
					Add To Count
				</button>

				<button type="button" onClick={() => setCount(count - 1)}>
					Remove From Count
				</button>
			</div>
		</>
	);
};

export default Counter;
