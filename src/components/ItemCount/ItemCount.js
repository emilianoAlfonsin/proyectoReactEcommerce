import { IconButton } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
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
            <p className="counter-title">Cantidad</p>
            <IconButton color='primary' size="small" onClick={handleSubtract}><RemoveCircleRoundedIcon/></IconButton>
            <span className='mx-3'>{quantity}</span>
            <IconButton color='primary' size="small" onClick={handleAdd}><AddCircleRoundedIcon/></IconButton>
        </div>
    )
}

export default ItemCount