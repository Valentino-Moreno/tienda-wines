import React from 'react'
import "./ItemListContainer.css"

import { useState,useEffect } from 'react';
import {db} from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
import ItemCard from '../ItemCard/ItemCard';


const ItemListContainer = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productos")
        // where("genre", "==", "synthpop")
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, []);



  return (
    <div className='contenedor'>
    <div className='container '> 
      <h2 className='text-center pt-3'>Nuestros Productos</h2>
      
      <div className='py-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        
        {productsData.map((product) => {
        return (
          <div key={product.id}>
            <ItemCard dataProduct={product} />
          </div>
        );
      })}
      
      </div>
    </div>
    </div>

    
    
  )
}

export default ItemListContainer