/* eslint-disable react/prop-types */
import { useState } from 'react';



function ProductForm({ setDatos }) {
	const [nuevoDato, setNuevoDato] = useState(
		{
			name:'',
			description: '',
			price:''
		}
		);

	const manejarCambios = (e) => {
		const { target } = e;
    const { name, value } = target;
		const newValues = {
			...nuevoDato,
			[name]: value,
		};
		setNuevoDato(newValues);
	};
  
	const manejarEnvio = (e) => {
		e.preventDefault();
		setDatos((prevDatos) => [...prevDatos, nuevoDato]);
		setNuevoDato({
			name:'',
			description: '',
			price:''
		});
	};
  
	return (
		<form onSubmit={manejarEnvio}>
			<label>
				Nombre del Producto:
				<input type="text" value={nuevoDato.name} onChange={manejarCambios} name='name' />
			</label>
			<label>
				Descripción del producto:
				<input type="text" value={nuevoDato.description} onChange={manejarCambios} name='description' />
			</label>
			<label>
				Precio del producto:
				<input type="text" value={nuevoDato.price} onChange={manejarCambios} name='price' />
			</label>
			<button type="submit">Agregar</button>
		</form>
	);
  }

export default ProductForm;