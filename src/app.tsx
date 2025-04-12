import "./app.css";
import Counter from "./components/counter";
import ColorPicker from "./components/colorPicker";
import Scheduler from "./components/scheduler";
import WordPicker from "./components/wordPicker";
import TicTacToe from "./components/ticTacToe";
import SearchForm from "./components/searchForm";
import ColorPointer from "./components/colorPointer";

const App = () => {
	return (
		<>
			<div id="wrapper">
				<ColorPointer />
				<hr />
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
				<hr />
				<ColorPointer />
			</div>
		</>
	);
};

export default App;
