/* eslint-disable react/prop-types */
// import style from '../styles/productList.module.css'


function Cards({ datos }) {
  return (
    <div>
      {datos.map((dato, index) => (
        <div key={index} className="card">
          <p>{dato.name} -- {dato.description} -- {dato.price}</p> 
        </div>
      ))}
    </div>
  );
}

export default Cards;