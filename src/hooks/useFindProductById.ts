import { useState } from "react";
import { FetchProvider } from "../providers/fetchProvider";

const useFindProductById = () => {
	const { createRequest } = FetchProvider();
	const [isLoading, setLoading] = useState<boolean>(false);

	const findProductById = async (id: number) => {
		setLoading(true);

		const response = await createRequest(
			"localhost",
			"",
			"POST",
			{},
			{},
			{
				query: `
          query FindProductById {
            findProductById(input: { id: "${id}" }) {
              id
              designation
              price
            }
          }
        `,
			},
		);

		await response.json();
		setLoading(false);
	};

	return {
		findProductById,
		isLoading,
	};
};

export { useFindProductById };
