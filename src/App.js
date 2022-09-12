import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CartContext from './context/CartContext'




const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (prod) => {
    setCart([...cart, prod])
  }

  return (

    <CartContext.Provider value={{
      cart,
      addToCart
    }}>

      <BrowserRouter>
      <div className='App'>
        <Header/>

        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/Tienda/:categoryId' element={<ItemListContainer/>} />
          <Route path='/Product/:prodId' element={<ItemDetailContainer/>} />
          <Route path='/Carrito' element={<Cart/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;
