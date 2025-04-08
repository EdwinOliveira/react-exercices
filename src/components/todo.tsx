import "./todo.css";

export type TodoProps = {
	id: number;
	designation: string;
	isCompleted: boolean;
	onComplete: (id: number) => void;
};

const Todo = ({ id, designation, isCompleted, onComplete }: TodoProps) => {
	return (
		<>
			<div id="todo">
				<span>{id}</span>
				<span>{designation}</span>
				<input
					type="checkbox"
					defaultChecked={isCompleted}
					onChange={() => onComplete(id)}
				/>
			</div>
		</>
	);
};

export default Todo;
