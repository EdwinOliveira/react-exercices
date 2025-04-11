import type { ProductEntity, ProductRepository } from "../domain/Product";

const products = new Array<ProductEntity>();

const ProductLocalRepository = (): ProductRepository => {
	return {
		findProducts: () => {
			return products;
		},
		findProductById: (id: number) => {
			return products.find((product) => product.id === id);
		},
		createProduct: (designation: string, price: number) => {
			const index = products.length + 1;
			products.push({ id: index, designation, price });
			return products.find((product) => product.id === index);
		},
	};
};

export { ProductLocalRepository };
