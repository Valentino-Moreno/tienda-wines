import React from 'react'
import './ItemDetail.css'
import Counter from '../counter/counter';
import { useState } from 'react';
import Redir from '../Redir/Redir';

import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({dataProduct}) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct,sumarCantidadCarrito} = useCartContext();

  const handleAddToCart = (count) => {
    // console.log(`Se compraron ${quant} unidades`);
    setGoToCart(true);
    addProduct(dataProduct, count)
    sumarCantidadCarrito()
  };

  return (
    <div className='gen'>
        <h2>{dataProduct.nombre}<span className='px-5' style={{color:'GrayText'}}>$ {dataProduct.precio}</span></h2>
        <div className='tarjeta'>
        <div className='child'>
            <img className='foto' src={dataProduct.imagen} alt={dataProduct.nombre} />
            <h3>{dataProduct.category}</h3>
        </div>
        <div className='child'>
            <p>{dataProduct.descripcion}</p>
           {
            goToCart ? <Redir/> : <Counter initial={1} handleAddToCart={handleAddToCart} className='contador' />

            
           }
        </div>
        </div>
    </div>
  )
}

export default ItemDetail