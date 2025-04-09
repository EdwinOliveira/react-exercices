import Input from "./input";
import { useFindSynonyms } from "../hooks/useFindSynonyms";

const WordPicker = () => {
	const { findSynonyms, words } = useFindSynonyms();

	const onSearch = async (rawText: string) => {
		await findSynonyms({ word: rawText, option: "rel_syn" });
	};

	return (
		<>
			<Input onAction={onSearch} />
			{words.map((word) => (
				<p key={word}>{word}</p>
			))}
		</>
	);
};

export default WordPicker;
