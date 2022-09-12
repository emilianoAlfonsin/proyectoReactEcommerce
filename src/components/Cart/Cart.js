import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useContext } from "react"
import CartContext from "../../context/CartContext"



const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="container">
            <h2 className="text-center">Carrito de compras</h2>
            <hr/>
            {/* <List sx={{ width: '100%', maxWidth: 740 }}>
                {
                    cart.map( (prod) => (
                        <ListItem key={prod.id} alignItems="flex-start">
                            <ListItemAvatar >
                                <Avatar src={prod.img}/>
                            </ListItemAvatar>
                            <ListItemText
                            primary={prod.name}
                            secondary={
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    ${prod.price}
                                </Typography>
                            }
                            />
                        </ListItem>
                ))}
            </List> */}
        </div>
    )
}


export default Cart