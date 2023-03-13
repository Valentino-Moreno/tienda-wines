import React from 'react'
import { useState,useEffect } from 'react';
import {db} from '../../firebase/firebaseConfig';
import { collection, query,where, getDocs } from "firebase/firestore";
// import { async } from '@firebase/util';
import ItemCard from './../../components/ItemCard/ItemCard';
import { useParams } from 'react-router-dom';

const Category = () => {
  const [productsData, setProductsData] = useState([]);
  let {category} = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productos"),
        where("category", "==", category)
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
  }, [category]);



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

export default Category