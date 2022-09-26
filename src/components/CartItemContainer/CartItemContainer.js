import { Fab, List, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"



const CartList = () => {

    const { cart, emptyCart, cartTotal} = useCartContext()

    return (
        <>
            <List className="cart-item">
                {
                    cart.map( (prod) => (
                        <CartItem prod={prod} key={prod.id}/>
                ))}
            </List>
            <div className='cart-total-container'>
                <Fab variant="extended" color="secondary" className="cart-checkout-btn">
                    <Link to={'/Checkout'} className="cart-checkout-link">
                        Finalizá tu compra
                    </Link>
                </Fab>
                <Fab onClick={emptyCart} variant="extended" color="error" className="cart-btn-empty" >Vaciar carrito</Fab>
                <Paper elevation={3} className="cart-show-total">
                    <p className='paper-title'>Total a pagar</p>
                    <p className='paper-content'>${cartTotal()}</p>
                </Paper>
            </div>
        </>
    )
}

export default CartList