import Button from 'react-bootstrap/Button'
import Card  from "react-bootstrap/Card"
import { Counter } from "../ItemCount/ItemCount"


const ItemDetail = ({producto}) => {
    return (
        <div className="container">
            <Card className="mx-auto d-flex" style={{ width: '24rem' }}>
                <Card.Img variant="top" border="secondary" src={producto.img}/>
                <Card.Body >
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>Categoría: {producto.categoria}</Card.Text>
                    <Card.Text>${producto.precio}</Card.Text>
                    <Counter/>
                    <Button variant="outlined-succes">Agregar producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail
