import {
	findProductByIdSchema,
	type FindProductByIdInput,
} from "../../domain/Product";
import { ProductLocalRepository } from "../../repositories/productLocalRepository";
import type { Input } from "../types";

const FindProductByIdResolver = () => {
	const { findProductById } = ProductLocalRepository();

	return {
		findProductById: ({ input: { id } }: Input<FindProductByIdInput>) => {
			const { data: schemaArgs, error: schemaErrors } =
				findProductByIdSchema.safeParse({ id });

			if (schemaErrors !== undefined) {
				return {};
			}

			return findProductById(schemaArgs.id);
		},
	};
};

export { FindProductByIdResolver };
