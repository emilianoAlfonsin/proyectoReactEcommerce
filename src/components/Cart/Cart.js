import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useContext } from "react"
import DeleteIcon from '@mui/icons-material/Delete'
import CartContext from "../../context/CartContext"



const Cart = () => {

    const { cart } = useContext(CartContext)
    return (
        <div className="container">
            <h2 className="text-center">Carrito de compras</h2>
            <hr/>
            <List sx={{ width: '100%', maxWidth: 740, bgcolor:'background.paper'}}>
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
                                    Precio unitario: ${prod.price}
                                </Typography>
                            }
                            />
                            <ListItemText
                            primary={
                                <Typography>
                                    Cantidad: {prod.quantity}
                                </Typography>
                            }
                            secondary={
                                <Typography>
                                    Subtotal: ${prod.quantity*prod.price}
                                </Typography>
                            }/>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                        
                ))}
            </List>
        </div>
    )
}


export default Cart