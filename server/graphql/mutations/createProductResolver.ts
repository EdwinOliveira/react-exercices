import {
	createProductSchema,
	type CreateProductInput,
} from "../../domain/Product";
import { ProductLocalRepository } from "../../repositories/productLocalRepository";
import type { Input } from "../types";

const CreateProductResolver = () => {
	const { createProduct } = ProductLocalRepository();

	return {
		createProduct: ({
			input: { designation, price },
		}: Input<CreateProductInput>) => {
			const { data: schemaArgs, error: schemaErrors } =
				createProductSchema.safeParse({ designation, price });

			if (schemaErrors !== undefined) {
				return {};
			}

			return createProduct(schemaArgs.designation, schemaArgs.price);
		},
	};
};

export { CreateProductResolver };
