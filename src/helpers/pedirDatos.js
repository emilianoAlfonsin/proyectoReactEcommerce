import { products } from "../data/data"

export const pedirDatos = () => {
        return new Promise ((resolve, reject) => {
                setTimeout(() =>{
                resolve (products)
                }, 2000)
        })
}

