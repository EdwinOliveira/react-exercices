import type { CreateProductInput } from "../../domain/Product";
import { ProductLocalRepository } from "../../repositories/productLocalRepository";

const CreateProductResolver = () => {
	const { createProduct } = ProductLocalRepository();

	return {
		createProduct: ({
			input: { designation, price },
		}: Record<string, CreateProductInput>) => {
			return createProduct(designation, price);
		},
	};
};

export { CreateProductResolver };
