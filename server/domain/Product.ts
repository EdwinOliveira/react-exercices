type ProductEntity = {
	id: number;
	designation: string;
	price: number;
};

type FindProductByIdInput = Readonly<Pick<ProductEntity, "id">>;
type CreateProductInput = Readonly<
	Pick<ProductEntity, "designation" | "price">
>;

type ProductRepository = {
	findProducts(): Array<ProductEntity>;
	findProductById(id: number): ProductEntity | undefined;
	createProduct(designation: string, price: number): ProductEntity | undefined;
};

export type {
	ProductEntity,
	FindProductByIdInput,
	CreateProductInput,
	ProductRepository,
};
