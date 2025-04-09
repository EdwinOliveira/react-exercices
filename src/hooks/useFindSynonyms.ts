import { useState } from "react";
import { FetchProvider } from "../providers/fetchProvider";

type FindSynonymRequest = {
	word: string;
	option: "ml" | "sl" | "sp" | "rel_syn";
};

type FindSynonymDTO = {
	word: string;
	score: number;
};

const useFindSynonyms = () => {
	const { createRequest } = FetchProvider();
	const [words, setWords] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const findSynonyms = async ({ word, option }: FindSynonymRequest) => {
		setIsLoading(true);
		const request = { [option]: word };
		const response = await createRequest("words", "GET", request);
		const rows = (await response.json()) as Array<FindSynonymDTO>;
		rows.sort((row) => row.score);
		setWords(rows.map((row) => row.word));
		setIsLoading(false);
	};

	return { findSynonyms, words, isLoading };
};

export { useFindSynonyms };
