/* eslint-disable react/prop-types */
import style from '../styles/productList.module.css'

function Cards({ datos, setDatos }) {
	const sumarPrecios = () => {
		const total = datos.reduce((acumulador, dato) => acumulador + parseFloat(dato.subtotal), 0);
		return total.toFixed(2);
	};
	const substractAmount = (dato) => {
		setDatos((prevDatos) =>
			prevDatos.map((d) =>
				d.name === dato.name
				? {
					...d,
					amount: Math.max(0, d.amount - 1),
					subtotal: Math.max(0, d.amount - 1) * d.price,
				}
				: d
			)
		);
	};
	
	const addAmount = (dato) => {
		setDatos((prevDatos) =>
		prevDatos.map((d) =>
			d.name === dato.name
			? { ...d, amount: d.amount + 1, subtotal: (d.amount + 1) * d.price }
			: d
			)
		);
	};
	
	return (
    <div className={style.productList}>
		<div className={style.placeList}>
			{datos.map((dato) => (
				<div key={dato.name+dato.price} className={style.cards}>
				<div>{dato.name} -- {dato.description} -- {dato.price} -- {dato.subtotal}</div> 
				<button onClick={()=>substractAmount(dato)} >-</button>
				<span>{dato.amount}</span>
				<button onClick={()=>addAmount(dato)} >+</button>
				</div>
			))}
			<p>Total: {sumarPrecios()}</p>
        </div>
    </div>
  );
}

export default Cards;