import './card.css'

export const Card = ({random}) => {


    return (
        <>
        <div className='cont'>

                <img className='imagen-personaje' src={random.img} alt="imagen del personaje" />

            <div className='container-nombre'>
                <label>Nombre:</label>
                <p className='nombre'>{random.name}</p>
            </div>

            <div className='container-apodo'>
                <label>Apodo:</label>
                <p>{random.nickname}</p>
            </div>

            <div className='container-estatus'>
                <label>Vivo o Muerto?</label>
                <p>{random.status === 'Alive' ? 'Aun sigue vivo' : 'Lamentablemente falleció'}</p>
            </div>

            <div className='container-ocupasion'>
                <label>Ocupasión:</label>
                <p>{random.occupation}</p>
            </div>


        </div>
            
            
        </>
    )
}