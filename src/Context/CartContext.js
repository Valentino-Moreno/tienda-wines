import React from 'react'
import { useState, useContext } from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);
    
    const clearCart = () =>{
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) =>{
        setCart(cart.filter(product => product.id !== id ))
    }

    // const addProduct= (item, newQuantity) => {
    //     const newCart = cart.filter(prod => prod.id !== item.id);
    //     newCart.push({...item,cuantity: newQuantity });
    //     setCart(newCart);
    // }
    const addProduct = (item, cantidad) => {
        const nuevoCarrito = [...cart];
      
        const indiceProductoExistente = nuevoCarrito.findIndex(
          (producto) => producto.id === item.id
        );
      
        if (indiceProductoExistente !== -1) {
          nuevoCarrito[indiceProductoExistente].cantidad += cantidad;
        } else {
          nuevoCarrito.push({ ...item, cantidad });
        }
      
        setCart(nuevoCarrito);
      };

    console.log('carrito',cart);

    const sumarCantidadCarrito = (carrito) => {
        let cantidadTotal = 0;
      
        for (let i = 0; i < carrito.length; i++) {
          cantidadTotal += carrito[i].cantidad;
        }
      
        console.log( 'totalc',cantidadTotal)
      };
      const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad,0);

      const precioTotal = () => {
        return cart.reduce((prev,act) => prev + act.cantidad * act.precio,0);
    }

    const existe = (id) => cart.find(product => product.id === id) ? true : false;
  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        sumarCantidadCarrito,
        totalProducts,
        precioTotal,
        existe,
        cart
    }}>
        {children}
    </CartContext.Provider>

  )
}

export default CartProvider