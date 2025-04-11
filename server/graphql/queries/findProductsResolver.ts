import { ProductLocalRepository } from "../../repositories/productLocalRepository";

const FindProductsResolver = () => {
	const { findProducts } = ProductLocalRepository();

	return {
		findProducts: () => {
			return findProducts();
		},
	};
};

export { FindProductsResolver };
