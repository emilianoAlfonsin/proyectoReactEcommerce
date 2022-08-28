import { Button } from "@mui/material";
import { useState } from "react";
import './ItemCount.scss'



export const Counter = () => {

    const [counter, setCounter] = useState(1)

    const handleSumar = () => {
        setCounter (counter + 1)
    }

    const handlerestar = () => {
        setCounter (counter - 1)
    }

    return (
        <div className="counter-container">
            <h4 className="counter-title">Contador</h4>
            <Button onClick={handlerestar}>-</Button>
            <span>{counter}</span>
            <Button onClick={handleSumar}>+</Button>
        </div>
    )
}