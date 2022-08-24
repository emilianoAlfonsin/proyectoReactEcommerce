import React from 'react'
import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/Greeting/ItemListContainer';


const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer/>
    </>
  )
}

export default App;
