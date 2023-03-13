import React from "react";

import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Categorias = () => {
  const [categoriaData, setCategoriaData] = useState([]);

  useEffect(() => {
    const getCategoria = async () => {
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCategoriaData(docs);
    };
    getCategoria();
  }, []);

  return (
    <div>
      {categoriaData.map((cata) => {
        return (
          <div key={cata.id}>
            <NavDropdown.Item as={Link} to={`/${cata.nombre}`} className='text-uppercase'>
              {cata.nombre}
            </NavDropdown.Item>
          </div>
        );
      })}
    </div>
  );
};

export default Categorias;
