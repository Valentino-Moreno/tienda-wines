import React from 'react';
import './CartItem.css';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../Context/CartContext';

const CartItem = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    
    <tbody>
      <tr>
        <td >{product.nombre}</td>
        <td>{product.precio}</td>
        <td>{product.cantidad}</td>
        <td>{product.cantidad * product.precio}</td>
        <td> <Button onClick={() => removeProduct(product.id)} className='btn-sm' variant="danger">Eliminar 🗑️</Button></td>
      </tr>
      
    </tbody>
  
  )
}

export default CartItem