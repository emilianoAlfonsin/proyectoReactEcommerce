import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
   
   const [products, setproducts] = useState([])
   const [loading, setLoading] = useState(true)
   const {categoryId} = useParams()


   useEffect(() => {
      setLoading(true)

      pedirDatos()
         .then( (res) => {
            if (!categoryId) {
               setproducts(res)
            }else{
               setproducts(res.filter ((prod) => prod.category === categoryId))
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
            ? <h4 className='text-center'>Cargando <Spinner animation="border" variant='secondary'/></h4>
            : <ItemList products={products}/>
         }
      </div>
   )
}

export default ItemListContainer