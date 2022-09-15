import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Typography, Fab } from "@mui/material"

const CartEmpty = () => {
    return (
        <Card>
            <CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tu carrito esta vacío
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Por favor vuelve a la tienda para encontrar el producto que buscas
                </Typography>
            </CardContent>
            <CardActions>
                <Fab variant='extended' color='secondary'>
                    <Link to="/" className='btn-to-store'>Volver a la tienda</Link>
                </Fab>
            </CardActions>
            </CardContent>
        </Card>
    )
}

export default CartEmpty