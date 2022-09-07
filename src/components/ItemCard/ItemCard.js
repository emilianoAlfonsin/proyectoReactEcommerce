import React from 'react'
import Card from '@mui/material/Card'
import './ItemCard.scss'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import {Link} from 'react-router-dom'



const ItemCard = ( {producto} ) => {
    return (
        <Link className='card-link' to={`/Product/${producto.id}`}>
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="200"
                    image={producto.img}
                    alt={producto.nombre}
                    />
                    <CardContent>
                    <Typography  variant="h6" component="div">
                        {producto.nombre}
                    </Typography>
                    <Typography>
                        $ {producto.precio}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    
    );  
}

export default ItemCard

