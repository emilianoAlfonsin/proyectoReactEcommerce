import {ItemCard} from "../ItemCard/ItemCard"


export const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>

            { productos.map((prod) => <ItemCard producto={prod} key={prod.id}/>)}
        </div>
    )
}
