import { useState } from "react";
import Todo, { type TodoProps } from "./todo";
import TodoCreator from "./input";

import "./scheluder.css";

const Scheduler = () => {
	const [todos, setTodos] = useState<Array<TodoProps>>([]);

	const onComplete = (id: number) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
		setTodos(todos);
	};

	const onCreate = (rawText: string) => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				designation: rawText,
				isCompleted: false,
				onComplete,
			},
		]);
	};

	return (
		<>
			<div id="scheduler">
				<TodoCreator onAction={onCreate} />
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
