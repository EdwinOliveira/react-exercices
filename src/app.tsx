import Counter from "./components/counter";
import ColorPicker from "./components/color-picker";

import "./app.css";
import Scheduler from "./components/scheduler";

const App = () => {
	return (
		<>
			<div id="wrapper">
				<Counter />
				<hr />
				<ColorPicker />
				<hr />
				<Scheduler />
			</div>
		</>
	);
};

export default App;
