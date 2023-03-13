import React from 'react'
// import CartItem from '../../components/CartItem/CartItem'  
import './Carrito.css'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { Button } from 'react-bootstrap'

const Carrito = () => {
  const {cart, precioTotal} = useCartContext() ;

  if (cart.length === 0) {
    return(
      <div className='container py-5'>
      <p className='mb-5'>El carrito no tiene ningun producto 🛒: 0</p>
      <Link to='/productos' className='button-52 mt-5'> Ver  Productos</Link>

      </div>
    );
  }
  return (
    <div className='container py-5'>
      <div><table class="table table-warning">
    <thead className='table-dark'>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio /u</th>
        <th scope="col">Cantidad</th>
        <th scope="col">SubTotal</th>
        <th scope="col">Eliminar Producto</th>
      </tr>
    </thead>
      {
        cart.map(product => <CartItem key={cart.id} product={product}/>)
      }
      </table></div>
      <p>total : $ {precioTotal()} <Button className='btn-success' style={{marginLeft:'0.5rem'}} as={Link} to='/productos'>Seguir comprando</Button></p>        

    </div>

    )
}

export default Carrito