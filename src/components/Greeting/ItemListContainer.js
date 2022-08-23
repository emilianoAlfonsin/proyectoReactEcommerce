import './ItemListContainer.scss'

export const ItemListContainer = ({user="Homero Simpson", adress="Siempreviva 742, Springfield"}) => {
    return (
        <div className='greeting'>
            <h3 className='greeting-title'>
                Bienvenido {user}
            </h3>
            <hr/>
            <p className='adress'>
                Su producto será entregado en {adress}
            </p>
        </div>
    )
}