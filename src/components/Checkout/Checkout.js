import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import FormCheckout from "../Forms/FormCheckout"
import './Checkout.scss'

const Checkout = () => {

    const { cart, cartTotal, finishPurchase, finishPurchaseSwal } = useCartContext()

    const [values, setValues] = useState({
        user: '',
        email: '',
        telephone: '',
        adress: ''
    })
    
    const handleImputChange = (e) =>{
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const purchaseOrder = {
            buyer: values,
            products: cart,
            total: cartTotal()
        }

        const ordersRef = collection( db, "Orders")

        addDoc( ordersRef, purchaseOrder )
            .then((doc) => {
                console.log(doc.id)
                finishPurchaseSwal(doc.id)
                finishPurchase()
            })

        console.log(purchaseOrder)
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }
    
    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Finalizá tu compra</h2>
            <hr/>
            <FormCheckout handleSubmit={handleSubmit} handleImputChange={handleImputChange}/>
        </div>
    )
}

export default Checkout