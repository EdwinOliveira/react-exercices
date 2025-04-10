import { useState } from "react";

const SearchForm = () => {
	const [searchValue, setSearchValue] = useState<string>();

	const handleSearch = (formData: FormData) => {
		setSearchValue(formData.get("search")?.toString() || "");
	};

	return (
		<>
			<form action={handleSearch}>
				<label htmlFor="search">{searchValue}</label>
				<input name="search" type="text" />
				<button type="submit">Search</button>
			</form>
		</>
	);
};

export default SearchForm;
