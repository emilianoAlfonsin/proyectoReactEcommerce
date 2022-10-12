import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { LoginProvider } from './context/LoginContext';

const App = () => {

  return (

    <LoginProvider>
      <CartProvider>

        <BrowserRouter>

          <Header/>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Tienda' element={<ItemListContainer/>} />
            <Route path='/Tienda/:categoryId' element={<ItemListContainer/>} />
            <Route path='/Product/:prodId' element={<ItemDetailContainer/>} />
            <Route path='/Carrito' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        
        </BrowserRouter>

      </CartProvider>
    </LoginProvider>
  )
}

export default App;
