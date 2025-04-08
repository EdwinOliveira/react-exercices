import Counter from "./components/counter";

import "./app.css";
import TicTacToe from "./components/tic-tac-toe";

const App = () => {
	return (
		<>
			<div id="wrapper">
				<Counter />
				<hr />
				<TicTacToe />
			</div>
		</>
	);
};

export default App;
