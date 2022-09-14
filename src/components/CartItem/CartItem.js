import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useCartContext } from "../../context/CartContext"

const CartItem = ({prod}) => {

    const { removeProd } = useCartContext()

    return (

        <ListItem  alignItems="flex-start" sx={{ bgcolor:'background.paper'}}>
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
            <IconButton onClick={() => removeProd(prod.id)} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}

export default CartItem