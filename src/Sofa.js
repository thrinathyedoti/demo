import React from 'react';
import './ProductList.css';
const Sofa = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Sofas</h2>
      <div className='row'>
        {products.map((e) => (
          <div key={e.id} className='color'>
            <img src={e.url} alt={e.name} width={350} />
            <p>{e.name}</p>
            <p>${e.MRP}</p>
            <p>${e.newprice}</p>
            <button onClick={() => addToCart(e)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sofa;