import React from "react"
import { ItemCard } from "../ItemCard/Itemcard"
import './Itemlist.scss'



export const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <h2 className="catalog-title">Productos</h2>
            <hr/>
            <div className="catalog-container">
                { productos.map((prod) => <ItemCard className="catalog-item" producto={prod} key={prod.id}/>)} 
            </div>
        </div>
    )
}

