/* eslint-disable react/prop-types */
import { useState } from 'react';

function ProductForm({ setDatos }) {
	const [nuevoDato, setNuevoDato] = useState('');

	const manejarCambios = (e) => {
		setNuevoDato(e.target.value);
	};
  
	const manejarEnvio = (e) => {
		e.preventDefault();
		setDatos((prevDatos) => [...prevDatos, nuevoDato]);
		setNuevoDato('');
	};
  
	return (
		<form onSubmit={manejarEnvio}>
			<label>
			Nuevo Dato:
				<input type="text" value={nuevoDato} onChange={manejarCambios} />
			</label>
			<button type="submit">Agregar</button>
		</form>
	);
  }

export default ProductForm;