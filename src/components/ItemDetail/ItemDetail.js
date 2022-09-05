import { Button } from "bootstrap"
import { Card } from "react-bootstrap"
import { Counter } from "../ItemCount/ItemCount"


export const ItemDetail = ({item}) => {
    return (
        <div>
            <Card>
                <Card.Img variant="left" src={item.img}/>
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Counter/>
                    <Button variant="primary">Agregar producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

