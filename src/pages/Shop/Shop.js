import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Shop.css';
import Button from '@mui/material/Button';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig'
import {useCartContext} from '../../Context/CartContext'
import Swal from 'sweetalert2';

const initialState = {
    name:"",
    email:"",
    city:"",
};



const Shop = () => {
  const {precioTotal,cart,totalProducts} = useCartContext();
  const [compraId, setCompraId] = useState("");

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
      const {value, name} = e.target;
      setValues({...values, [name]: value});
    };
    const carroFinal = cart;
    carroFinal.forEach(element => {
      delete element.imagen
      delete element.descripcion
      delete element.id
    });

    const handleOnSubmit = async (e) => {
      e.preventDefault();
      const price = {
        price: precioTotal()
    };
    const tot = {
      total: totalProducts()
  };
      const ticket = {...values, ...price, ...tot, ...carroFinal};
      
      const docRef = await addDoc(collection(db, "compras"), {
        ticket
      });
      // console.log("Document written with ID: ", docRef.id);
      setCompraId(docRef.id);
      setValues(initialState);
      Swal.fire({
        icon: 'success',
        title:'Su compra fue realizada con exito',
        text:` El ID de su Operacion es 🎫: ${compraId}. Compro ${tot.total} productos y gasto ${price.price}.`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        footer:'<a href="/">Finalizar</a>',
        allowOutsideClick: false,
        showConfirmButton:false

    })
    }


  return (
    <div className='container pt-5 d-flex justify-content-center'>
        <div  className='box rounded-3 rounded-top-0 bg-light px-5 py-5 d-flex flex-column border border-dark-subtle'>
          <h3 className='text-center'> Ingrese sus datos para finalizar </h3>
        <TextField className='py-3'
          required
          id="outlined-required"
          label="Name"
          defaultValue="Hello World"
          name='name'
          value={values.name}
          onChange={handleOnChange}
        />
           <TextField className='py-3'
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
          name='email'
          value={values.email}
          onChange={handleOnChange}
        />
           <TextField className='py-3'
          required
          id="outlined-required"
          label="City"
          defaultValue="Hello World"
          name='city'
          value={values.city}
          onChange={handleOnChange}
        />
        <Button onClick={handleOnSubmit} variant="outlined">Finalizar Compra</Button>
        </div>
    </div>
  )
}

export default Shop

// Swal.fire(
//   'The Internet?',
//   'That thing is still around?',
//   'question'
// )