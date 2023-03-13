import React, { useState } from 'react';

const Counter = ({handleAddToCart, initial}) => {
const [count, setCount] = useState(initial);


const decrease = () => {
  setCount(count - 1);
}
const increase = () => {
  setCount(count + 1);
}

  return (
    <div>
      <p >Unidades: <span style={{color:'blueviolet',fontWeight:'bolder'}}>{count}</span></p>
      <button type="button" className="mt-3 btn btn-light" disabled={count <= 1} onClick={decrease} style={{ marginRight: '10px' }}>-</button>
      <button type="button" className="mt-3 btn btn-success" onClick={()=> handleAddToCart(count)} >Agregar al Carrito 🛒</button>
      <button type="button" className="mt-3 btn btn-light" onClick={increase} style={{ marginLeft: '10px' }}>+</button>
    </div>
  );
};

export default Counter;
