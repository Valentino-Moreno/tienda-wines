import React from 'react'

import { useState,useEffect } from 'react';
import {db} from '../../firebase/firebaseConfig';
import { documentId,collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [productData, setProductData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "productos"),
        where( documentId() , "==", id)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs[0])
      setProductData(docs[0]);
    };
    getProduct();
  }, [id]);



  return (
  
  <ItemDetail dataProduct={productData} />
    
  )
}

export default ItemDetailContainer