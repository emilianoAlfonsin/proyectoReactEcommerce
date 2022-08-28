import { productos } from "../data/data"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            
                resolve(productos)
            
        } )
}