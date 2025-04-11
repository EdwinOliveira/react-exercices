import { z } from "zod";

type ProductEntity = {
	id: number;
	designation: string;
	price: number;
};

type FindProductByIdInput = Readonly<Pick<ProductEntity, "id">>;
const findProductByIdSchema = z.object({
	id: z
		.string()
		.transform((id) => Number.parseInt(id))
		.refine((id) => Number.isNaN(id) === false),
});

type CreateProductInput = Readonly<
	Pick<ProductEntity, "designation" | "price">
>;
const createProductSchema = z.object({
	designation: z.string(),
	price: z.number(),
});

type ProductRepository = {
	findProducts(): Array<ProductEntity>;
	findProductById(id: number): ProductEntity | undefined;
	createProduct(designation: string, price: number): ProductEntity | undefined;
};

export {
	type ProductEntity,
	type FindProductByIdInput,
	findProductByIdSchema,
	type CreateProductInput,
	createProductSchema,
	type ProductRepository,
};
