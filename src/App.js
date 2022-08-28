import React from 'react';
import './App.css';
import { ItemListContainer } from './components/Greeting/ItemListContainer';
import { Header } from './components/Header/Header';




const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer/>
    </>
  )
}

export default App;
