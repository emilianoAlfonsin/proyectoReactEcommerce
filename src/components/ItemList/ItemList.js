import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './ItemList.scss';



const ItemList = ( { productos = [] } ) => {

    return (
        <div>
            <h2 className="catalog-title">Productos</h2>
            <hr/>
            <div className="catalog-container">
                { productos.map((prod) => <ItemCard  producto={prod} key={prod.id}/>)} 
            </div>
        </div>
    )
}

export default ItemList
