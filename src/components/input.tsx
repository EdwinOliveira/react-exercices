type InputProps = {
	onAction: (rawText: string) => void;
};

const Input = ({ onAction }: InputProps) => {
	const handleBlur = (data: React.FocusEvent<HTMLInputElement, Element>) => {
		if (data.target.value === "") {
			return;
		}

		onAction(data.target.value);
	};
	return <input name="rawText" type="text" onBlur={handleBlur} />;
};

export default Input;
