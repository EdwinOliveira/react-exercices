import type { FindProductByIdInput } from "../../domain/Product";
import { ProductLocalRepository } from "../../repositories/productLocalRepository";

const FindProductByIdResolver = () => {
	const { findProductById } = ProductLocalRepository();

	return {
		findProductById: ({ id }: FindProductByIdInput) => {
			return findProductById(Number(id));
		},
	};
};

export { FindProductByIdResolver };
