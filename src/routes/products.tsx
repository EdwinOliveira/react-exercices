import { useFindProducts } from "../hooks/useFindProducts";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { useFindProductById } from "../hooks/useFindProductById";
import { Product } from "../components/product";

const Products = () => {
	const { findProducts, products } = useFindProducts();
	const { findProductById } = useFindProductById();
	const { createProduct } = useCreateProduct();

	const handleLoadProducts = async () => {
		await findProducts();
	};

	const handleCreateProductAction = async (formData: FormData) => {
		const designation = formData.get("designation")?.toString() || "";
		const price = formData.get("price")?.toString() || "";

		await createProduct(designation, Number.parseInt(price));
	};

	const handleSearchProductAction = async (formData: FormData) => {
		const id = formData.get("id")?.toString() || "";

		await findProductById(Number.parseInt(id));
	};

	return (
		<>
			<div id="products">
				<button type="button" onClick={handleLoadProducts}>
					LOAD PRODUCTS
				</button>
				<form id="create-product" action={handleCreateProductAction}>
					<input type="text" name="designation" />
					<input type="number" name="price" />
					<button type="submit"> Create Product </button>
				</form>
				<form id="search-product" action={handleSearchProductAction}>
					<input type="number" name="id" />
					<button type="submit"> Search Product </button>
				</form>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</>
	);
};

export { Products };
