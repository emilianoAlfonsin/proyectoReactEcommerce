import { Fab, Grid, Paper, TextField } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
// import FormCheckout from "../Forms/FormCheckout"
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

            <Paper
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '40%' },
                    flexGrow: 1
                }}
                autocomplete off
                className="form-chekout-container"
                onSubmit={handleSubmit}
                >
                <Grid item xs="auto" display="flex" justifyContent="center">
                    <TextField
                        required
                        id = "user"
                        label = "Nombre completo"
                        color="secondary"
                        className="checkout-imput"
                        onChange={handleImputChange}
                        />    
                </Grid>
                <Grid item xs="auto" display="flex" justifyContent="center">
                    <TextField
                        required
                        id = "email"
                        label = "Email"
                        type="email"
                        color="secondary"
                        className="checkout-imput"
                        onChange={handleImputChange}
                        />
                </Grid>
                <Grid item xs="auto" display="flex" justifyContent="center">
                    <TextField
                        required
                        id = "telephone"
                        label = "Teléfono"
                        color="secondary"
                        className="checkout-imput"
                        onChange={handleImputChange}
                        />
                </Grid>
                <Grid item xs="auto" display="flex" justifyContent="center">
                    <TextField
                        required
                        id = "adress"
                        label = "Dirección"
                        color="secondary"
                        className="checkout-imput"
                        onChange={handleImputChange}
                        />
                </Grid>
                <Grid item display="flex" justifyContent="center" >
                    <Fab type="submit" variant="extended" color="secondary" sx={{m:3}}>Enviar</Fab>
                </Grid>
            </Paper>
            {/* <FormCheckout onSubmit={handleSubmit}/> */}
        </div>
    )
}

export default Checkout