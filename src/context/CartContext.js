import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const cartInit = JSON.parse(localStorage.getItem('cartStorage')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(cartInit)

    const addToCart = (prod) => {
        setCart([...cart, prod])
    }

    // const increaseQuantity = () => {
    //     const newCart = [...cart]
    //     cart 
    // }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeProd = (id) => {
        Swal.fire({
            title: 'Querés quitar este producto?',
            text: "Eliminarás este producto de tu lista de compras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Quitar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Listo!',
                'Eliminaste este producto de tu lista de compras',
                'success'
            )
            setCart( cart.filter((prod) => prod.id !== id) )
            }  
        })
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Querés vaciar tu carrito?',
            text: "Perderás todos tus productos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Listo!',
                'Tu carrito está vacío',
                'success'
            )
            setCart([])
            }
        })
    }
    
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    useEffect(() => {
        localStorage.setItem('carInit', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeProd,
            emptyCart,
            cartQuantity,
            isInCart,
            cartTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}
