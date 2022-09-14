import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {

    const { cartQuantity } = useCartContext()

    return (
        <Badge badgeContent={cartQuantity()} color="success">
            <ShoppingCartIcon color="action" />
        </Badge>
    )
}

export default CartWidget