import "./product.css";
import type { ProductEntity } from "../types";

type ProductProps = Pick<ProductEntity, "id" | "designation" | "price">;

const Product: React.FC<ProductProps> = ({ id, designation, price }) => {
	return (
		<div id="product">
			<p> {id} </p>
			<p> {designation} </p>
			<p> {price} </p>
		</div>
	);
};

export { Product };
