import { useState } from "react";
import { FetchProvider } from "../providers/fetchProvider";

const useCreateProduct = () => {
	const { createRequest } = FetchProvider();
	const [isLoading, setLoading] = useState<boolean>(false);

	const createProduct = async (designation: string, price: number) => {
		setLoading(true);

		const response = await createRequest(
			"localhost",
			"",
			"POST",
			{},
			{},
			{
				query: `
          mutation CreateProduct {
            createProduct(input: { designation: "${designation}", price: ${price} }) {
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
		createProduct,
		isLoading,
	};
};

export { useCreateProduct };
