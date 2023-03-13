import React from 'react'
import './Home.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
const Home = () => {
  return (
    <>
    <div className='hero'>
      <h1>Bienvenido a Mountain Wines</h1>
      <p>Aqui encontrara una gran variedad de los mejores vinos que tiene la provincia del Sol y del buen Vino</p>
    </div>
    <ItemListContainer />
    </>
  )
}

export default Home