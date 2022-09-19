import { Divider, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import './ItemDetail.scss'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const { addToCart, isInCart } = useCartContext()

    const handleAddToCart = () => {
        const prodToCart = {
            id: product.id,
            price: product.price,
            name: product.name,
            img: product.img,
            stock: product.stock,
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
            <span>Stock disponible: {product.stock}</span>
            {/* <Select className="select"></Select> */}
            <div className="card-desc">{product.desc}
                <Divider/>
            </div>
            <div className="card-count">
            {
                isInCart(product.id)
                ?   <Fab color="secondary" variant="extended" aria-label="link" className="add-to-cart">
                        <Link to='/Carrito' className='btn-to-cart'>Finalizar compra</Link>
                    </Fab>
                :   <>
                        <ItemCount
                            stock={product.stock}
                            quantity={quantity} 
                            setQuantity={setQuantity}
                        />
                        <Fab color="primary" variant="extended" aria-label="add" onClick={handleAddToCart} className="add-to-cart">
                            <AddIcon sx={{ mr: 1 }} />Agregar
                        </Fab>
                    </>
            }
            </div>
        </div>
    )
}

export default ItemDetail
