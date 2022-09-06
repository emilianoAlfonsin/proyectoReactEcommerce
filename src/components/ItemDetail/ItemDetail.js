import { Button } from "bootstrap"
import { Card } from "react-bootstrap"
import { Counter } from "../ItemCount/ItemCount"


const ItemDetail = ({producto}) => {
    return (
        <div>
            <Card>
                <Card.Img variant="left" src={producto.img}/>
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>{producto.categoria}</Card.Text>
                    <Card.Text>{producto.precio}</Card.Text>
                    <Counter/>
                    <Button variant="primary">Agregar producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail
