import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ItemList from '../ItemList/ItemList'


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
            ? <Spinner animation="border" />
            : <ItemList prouctos={productos}/>
         }
      </div>
   )
}

export default ItemListContainer