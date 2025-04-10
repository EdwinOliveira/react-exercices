import type { CreateTodoInput } from "./inputs";

const createResolvers = () => {
	const findTodos = () => {
		return [{ id: 1, designation: "dummy", isCompleted: false }];
	};

	const findTodoById = ({ id }: { id: string }) => {
		return { id, designation: "dummy", isCompleted: false };
	};

	const createTodo = ({
		input: { designation },
	}: Record<string, CreateTodoInput>) => {
		return { id: 1, designation, isCompleted: false };
	};

	return {
		findTodoById,
		findTodos,
		createTodo,
	};
};
export { createResolvers };
