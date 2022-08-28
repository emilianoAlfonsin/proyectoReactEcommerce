// import { ItemCard } from '../ItemCard/Itemcard'
import { Counter } from '../ItemCount/ItemCount'
import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import {ItemList} from '../Itemlist'




export const ItemListContainer = ({user="Homero Simpson", adress="Siempreviva 742, Springfield"}) => {

   useEffect(() => {
      pedirDatos()
         .then( (res) => {
               setProductos(res)
         })
         .catch( (error) => {
               console.log(error)
         })
   }, [])

   const [productos, setProductos] = useState([])


   return (
      <div className='container'>
         <div className='greeting'>
            <h3 className='greeting-title'>
               Bienvenido {user}
            </h3>
            <p className='adress'>
               Su producto será entregado en {adress}
            </p>
         </div>
         <hr/>
         <Counter/>
         <div>
               <ItemList productos={productos}/>
         </div>
      </div>
   )
}