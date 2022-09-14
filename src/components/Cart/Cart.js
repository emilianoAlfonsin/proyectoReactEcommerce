
import {useCartContext} from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Fab, List, Paper } from "@mui/material"


const Cart = () => {

    const { cart, emptyCart, cartTotal } = useCartContext()

    return (
        <div className="container">
            <h2 className="text-center">Carrito de compras</h2>
            <hr/>
            <List sx={{ width: '100%', maxWidth: 740}}>
                {
                    cart.map( (prod) => (
                        <CartItem prod={prod} key={prod.id}/>
                ))}
            </List>
            
            <Fab onClick={emptyCart} variant="extended" color="error" sx={{mt:2}}>Vaciar carrito</Fab>

            <Paper elevation={3} sx={{mt:2, width:640, fontSize:20}}>Total a pagar: ${cartTotal}</Paper>
        </div>
    )
}


export default Cart