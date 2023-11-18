/* eslint-disable react/prop-types */
// import style from '../styles/productList.module.css'


function Cards({ datos }) {
  return (
    <div>
      {datos.map((dato, index) => (
        <div key={index} className="card">
          {/* Renderizar tu card con los datos */}
          <p>{dato} -- ooo</p> 
        </div>
      ))}
    </div>
  );
}

export default Cards;