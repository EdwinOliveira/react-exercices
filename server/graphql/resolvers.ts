import { FindProductsResolver } from "./queries/findProductsResolver";
import { FindProductByIdResolver } from "./queries/findProductByIdResolver";
import { CreateProductResolver } from "./mutations/createProductResolver";

const createResolvers = () => {
	const { findProducts } = FindProductsResolver();
	const { findProductById } = FindProductByIdResolver();
	const { createProduct } = CreateProductResolver();

	return {
		findProducts,
		findProductById,
		createProduct,
	};
};
export { createResolvers };
