import { Fab } from '@mui/material'

import './ItemCount.scss'



const ItemCount = ({stock, quantity, setQuantity}) => {


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
        </div>
    )
}

export default ItemCount