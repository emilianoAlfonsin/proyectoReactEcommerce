import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'




const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/Tienda/:categoryId' element={<ItemListContainer/>} />
        <Route path='/Product/:prodId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
