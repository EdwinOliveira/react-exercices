import Counter from "./components/counter";
import ColorPicker from "./components/colorPicker";
import Scheduler from "./components/scheduler";
import WordPicker from "./components/wordPicker";

import "./app.css";

const App = () => {
	return (
		<>
			<div id="wrapper">
				<Counter />
				<hr />
				<ColorPicker />
				<hr />
				<Scheduler />
				<hr />
				<WordPicker />
			</div>
		</>
	);
};

export default App;
