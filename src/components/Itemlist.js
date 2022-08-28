import React from "react"
import { Grid } from "@mui/material"
import { ItemCard } from "./ItemCard/Itemcard"



export const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    { productos.map((prod) => <ItemCard item xs={12} sm={6} md={4} producto={prod} key={prod.id}/>)}  
            </Grid>
        </div>
    )
}

{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12} sm={6} md={4}></Grid>
    </Grid>
</Grid> */}