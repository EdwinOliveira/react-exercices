type TodoCreatorProps = {
	onCreate: (designation: string) => void;
};

const TodoCreator = ({ onCreate }: TodoCreatorProps) => {
	const handleBlur = (data: React.FocusEvent<HTMLInputElement, Element>) => {
		if (data.target.value === "") {
			return;
		}

		onCreate(data.target.value);
	};
	return <input name="designation" type="text" onBlur={handleBlur} />;
};

export default TodoCreator;
