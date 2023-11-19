import './product.css'
import ProductForm from '../components/ProductForm';
import Cards from '../components/ProductList';
import { useState } from 'react';

function Product() {
	const [datos, setDatos] = useState([]);

	return (
		<div>
			<ProductForm setDatos={setDatos} />
			<Cards datos={datos} />
		</div>
	);
}
export default Product;