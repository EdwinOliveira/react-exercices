import { useState } from "react";
import Todo, { type TodoProps } from "./todo";

import "./scheluder.css";
import TodoCreator from "./todo-creator";

const Scheduler = () => {
	const [todos, setTodos] = useState<Array<TodoProps>>([]);

	const onComplete = (id: number) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
		setTodos(todos);
	};

	const onCreate = (designation: string) => {
		console.log(designation);
		setTodos([
			...todos,
			{ id: todos.length + 1, designation, isCompleted: false, onComplete },
		]);
		console.log(todos);
	};

	return (
		<>
			<div id="scheduler">
				<TodoCreator onCreate={onCreate} />
				<div id="todos">
					{todos?.map((todo) => (
						<Todo key={todo.id} {...todo} />
					))}
				</div>
			</div>
		</>
	);
};

export default Scheduler;
