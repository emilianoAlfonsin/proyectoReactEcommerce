import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    //Manipulación de Modales
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Validacion de formularios con expresiones regulares
    const validateForm = (values) => {
        let errorMsg = {}

        if (!values.name) {
            errorMsg.name = 'Por favor ingrese un nombre válido'
        } else if (!/^[a-zA-ZÁ-ÿ\s]{3,40}$/.test(values.name)){
            errorMsg.name = 'El nombre sólo puede contener letras y espacios'
        }
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

        return errorMsg
    }

    // Submit del registro de usuario
    const [formSended, setFormSended] = useState(false)

    const regSubmit = (values, {resetForm}) => {
            setFormSended(true)
            resetForm()
            setTimeout(() => {
                handleClose();
                setFormSended(false)
            }, 3000)
            console.log("Formulario enviado")
    }

    return (
        <LoginContext.Provider value={{
            show,
            handleClose,
            handleShow,
            validateForm,
            regSubmit,
            formSended
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}