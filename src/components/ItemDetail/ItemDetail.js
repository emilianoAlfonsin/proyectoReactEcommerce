import ItemCount from '../ItemCount/ItemCount'
import { Divider, Fab } from "@mui/material"
import { useState } from "react";
import './ItemDetail.scss'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const { addToCart, isInCart } = useCartContext()

    const handleAddToCart = () => {
        const prodToCart = {
            id: product.id,
            price: product.price,
            name: product.name,
            img: product.img,
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
            {/* <Select className="select"></Select> */}
            <div className="card-desc">{product.desc}
                <Divider/>
            </div>
            <div className="card-count">

            {
                isInCart(product.id)
                ?   <Fab color="secondary" variant="extended" aria-label="link" className="add-to-cart">
                        <Link to='/Carrito' sx={{ textDecoration: 'none' }}>Ir al carrito</Link>
                    </Fab>                   
                :   <ItemCount 
                        stock={product.stock}
                        quantity={quantity} 
                        setQuantity={setQuantity}
                        handleAddToCart={handleAddToCart}
                    />
            }
            </div>
        </div>
    )
}

export default ItemDetail
