import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'
import { Link } from 'react-router-dom'
import './ItemCount.scss'



const ItemCount = ({stock, quantity, setQuantity, handleAddToCart}) => {


    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity (quantity + 1)
        } else {
            console.log("Agotado")
        }
    }

    const handleSubtract = () => {
        if ( quantity > 1 ) {
            setQuantity (quantity - 1)
        }
    }

    return (
        <div className="counter-container">
            <h5 className="counter-title">Cantidad</h5>
            <Fab color='primary' size="small" onClick={handleSubtract}>-</Fab>
            <span className='mx-3'>{quantity}</span>
            <Fab color='primary' size="small" onClick={handleAdd}>+</Fab>
            <Fab color="primary" variant="extended" aria-label="add" onClick={handleAddToCart} className="add-to-cart">
                <AddIcon sx={{ mr: 1 }} />Agregar
            </Fab>
            <Fab color="secondary" variant="extended" aria-label="link" className="add-to-cart">
                <Link to='/Carrito' sx={{ textDecoration: 'none' }}>Ir al carrito</Link>
            </Fab>
        </div>
    )
}

export default ItemCount