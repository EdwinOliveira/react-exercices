import Counter from "./components/counter";
import ColorPicker from "./components/colorPicker";
import Scheduler from "./components/scheduler";
import WordPicker from "./components/wordPicker";
import TicTacToe from "./components/ticTacToe";

import "./app.css";
import SearchForm from "./components/search-form";

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
				<hr />
				<TicTacToe />
				<hr />
				<SearchForm />
			</div>
		</>
	);
};

export default App;
