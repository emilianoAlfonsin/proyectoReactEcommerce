import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const ItemCard = ({producto}) => {
    return (
        <Card sx={{ maxWidth: 320 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={producto.img}
            alt={producto.nombre}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {producto.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {producto.desc}
            </Typography>
            <Typography>
                $ {producto.precio}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
                Agregar <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
        </Card>
    );
}

