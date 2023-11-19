/* eslint-disable react/prop-types */
import style from '../styles/productList.module.css'

function Cards({ datos }) {
	const sumarPrecios = () => {
		const total = datos.reduce((acumulador, dato) => acumulador + parseFloat(dato.price), 0);
		return total.toFixed(2);
	};

	return (
    <div className={style.productList}>
		<div className={style.placeList}>
			{datos.map((dato) => (
				<div key={dato.name+dato.price} className={style.cards}>
				<p>{dato.name} -- {dato.description} -- {dato.price}</p> 
				</div>
			))}
			<span>Total: {sumarPrecios()}</span>
        </div>

    </div>
  );
}

export default Cards;