import Nav from './components/Nav/Nav.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home.js'
import Error from './pages/Error/Error';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.js';
import Carrito from './pages/Carrito/Carrito.js';
import CartProvider from './Context/CartContext.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Shop from './pages/Shop/Shop.js';

function App() {
  return (    
    <BrowserRouter>
    <CartProvider>

    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:category' element={<Category/>}></Route>
      <Route path='/productos/:id' element={<ItemDetailContainer/>}></Route>
      <Route path='/carrito' element={<Carrito/>}></Route>
      <Route path='/productos' element={<ItemListContainer/>}></Route>

      <Route path='/shop' element={<Shop/>}></Route>

      <Route path='*' element={<Error/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
