import './ItemListContainer.scss'
import ItemList from '../ItemList/Itemlist'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
   
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)
   const {categoryId} = useParams()


   useEffect(() => {
      setLoading(true)

      pedirDatos()
         .then( (res) => {
            if (!categoryId) {
               setProductos(res)
            }else{
               setProductos(res.filter ((prod) => prod.categoria === categoryId))
            }
         })
         .catch( (error) => {
               console.log(error)
         })
         .finally(() => {
            setLoading(false)
         })
   }, [categoryId])



   return (
      <div className='container'>
         {
            loading 
            ? <h2>...</h2>
            : <ItemList productos={productos}/>
         }
      </div>
   )
}

export default ItemListContainer