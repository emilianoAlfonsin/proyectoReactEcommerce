import { createContext, useContext, useEffect, useState } from "react";    
import { auth, signup } from "../firebase/config";
export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    // Funcionalidad del Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Validacion de formulario con expresiones regulares
    const validateForm = (values) => {
        let errorMsg = {}

        if (!values.email) {
            errorMsg.email = 'Por favor ingrese un email válido'
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errorMsg.email = 'El correo solo puede contener letras, números, puntos, guión y guión bajo'
        }

        if (!values.password) {
            errorMsg.password = 'Por favor ingrese un password válido'
        } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,15}$/.test(values.password)){
            errorMsg.password = 'La contraseña debe tener entre 8 y 15 caracteres, al menos un número y una letra'
        }

        if (!values.confirmPassword) {
            errorMsg.confirmPassword = 'Por favor ingresá el password nuevamente'
        } else if (values.confirmPassword !== values.password) {
            errorMsg.confirmPassword = 'Las contraseñas ingresadas no coinciden'
        }

        return errorMsg
    }

    // Registro y login de usuarios
    const [currentUser, setCurrentUser] = useState()

    const [formSended, setFormSended] = useState(false)

    const handleRegSubmit = (values, {resetForm}) => {
        signup(values.email, values.password)
        setFormSended(true)
        resetForm()
        setTimeout(() => {
            handleClose()
            setFormSended(false)
        }, 3000)
        console.log("Formulario enviado")
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged( user => {
            setCurrentUser (user)
        })
        return unsuscribe
    }, [])  

    return (
        <LoginContext.Provider value={{
            show,
            handleShow,
            handleClose,
            validateForm,
            handleRegSubmit,
            formSended
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}