
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import './ItemCount.scss'



export const Counter = () => {

    const [counter, setCounter] = useState(1)

    const handleSumar = () => {
        setCounter (counter + 1)
    }

    const handleRestar = () => {
        setCounter (counter - 1)
    }

    return (
        <div className="counter-container">
            <h6 className="counter-title">Cantidad</h6>
            <Button variant="oulined-secondary" size="sm" onClick={handleRestar}>-</Button>
            <span className='mx-3'>{counter}</span>
            <Button variant="oulined-secondary" size="sm" onClick={handleSumar}>+</Button>
        </div>
    )
}