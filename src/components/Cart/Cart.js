import './Cart.scss'
import {useCartContext} from "../../context/CartContext"
import CartEmpty from '../CartEmpty/CartEmpty'
import CartList from '../CartItemContainer/CartItemContainer'



const Cart = () => {

    const { cart } = useCartContext()

    return (
        <div className="container cart-container">
            <h2 className="cart-title">Carrito de compras</h2>
            <hr/>

            {
                cart.length === 0
                ? <CartEmpty/>
                : <CartList/> 
            }
        </div>
    )
}


export default Cart