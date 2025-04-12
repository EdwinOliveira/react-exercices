import { useState } from "react";
import { FetchProvider } from "../providers/fetchProvider";
import type { ProductEntity } from "../types";

const useFindProducts = () => {
	const { createRequest } = FetchProvider();
	const [isLoading, setLoading] = useState<boolean>(false);
	const [products, setProducts] = useState<Array<ProductEntity>>([]);

	const findProducts = async () => {
		setLoading(true);
		const response = await createRequest(
			"localhost",
			"",
			"POST",
			{},
			{},
			{
				query: `
          query FindProducts {
            findProducts {
              id
              designation
              price
            }
          }
        `,
			},
		);
		const rows = (await response.json()) as {
			data: { findProducts: Array<ProductEntity> };
		};

		setProducts(rows.data.findProducts);
		setLoading(false);
	};

	return {
		findProducts,
		products,
		isLoading,
	};
};

export { useFindProducts };
