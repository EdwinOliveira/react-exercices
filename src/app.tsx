import Counter from "./components/counter";

import "./app.css";
import ColorPicker from "./components/color-picker";

const App = () => {
	return (
		<>
			<div id="wrapper">
				<Counter />
				<hr />
				<ColorPicker />
			</div>
		</>
	);
};

export default App;
