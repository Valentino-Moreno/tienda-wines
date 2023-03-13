import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Shop.css';

const initialState = {
    name:"",
    email:"",
    city:"",
};

const Shop = () => {

    const [values, setValues] = useState(initialState);

  return (
    <div className='container pt-5 d-flex justify-content-center'>
        <div className='box rounded-3 rounded-top-0 bg-light px-5 py-5 d-flex flex-column border border-dark-subtle'>
        <TextField className='py-3'
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          name='name'
          value={values.name}
        />
           <TextField className='py-3'
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          name='email'
          value={values.email}
        />
           <TextField className='py-3'
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          name='city'
          value={values.city}

        />
       
        </div>
    </div>
  )
}

export default Shop