import React from 'react'
import './CartWidget.css'
import { Icon } from '@iconify/react'
import {useCartContext} from '../../Context/CartContext'

const CartWidget = () => {

  const {totalProducts} = useCartContext();
  return (
    <div className='d-flex'>
    <p>
    <Icon className='carro' width={40} icon="ri:shopping-cart-fill"/>
    </p>
    <p  className='py-1   px-3'>
   {totalProducts() !== 0 ? <p>{totalProducts()}</p> :''}
    </p>
    </div>
      
)
}

export default CartWidget;