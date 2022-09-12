import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './ItemList.scss';



const ItemList = ( { products = [] } ) => {

    return (
        <div>
            <h2 className="catalog-title">Productos</h2>
            <hr/>
            <div className="catalog-container">
                { products.map((prod) => <ItemCard  product={prod} key={prod.id}/>)} 
            </div>
        </div>
    )
}

export default ItemList
