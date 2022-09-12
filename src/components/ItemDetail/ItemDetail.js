import ItemCount from '../ItemCount/ItemCount'
import { Divider, Select } from "@mui/material"
import { useContext, useState } from "react";
import './ItemDetail.scss'
import CartContext from '../../context/CartContext';

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const {cart, addToCart} = useContext(CartContext)
    console.log(cart)

    const handleAddToCart = () => {
        const prodToCart = {
            id: product.id,
            price: product.price,
            name: product.name,
            quantity
        }
        addToCart(prodToCart)
    }

    return (
        <div className="card-container">
            <div className="card-image">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="card-title">
                <h4>{product.name}</h4>
                <Divider/>
            </div>
            <span className="price">Precio: ${product.price}</span>
            <Select className="select"></Select>
            <div className="card-desc">{product.desc}</div>
            <div className="card-count">
            <ItemCount 
                stock={product.stock}
                quantity={quantity} 
                setQuantity={setQuantity}
                handleAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}

export default ItemDetail
