import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { borrarContacto } from '../actions/contactosActions'

const Home = (props) => {

    const despachador = useDispatch()

    return (
        <div>
            <h3>lista contactos</h3>
            <ul>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {
                        props.listaContactos.map((contacto) => {
                            return (
                                <div key={contacto.id} style={{ border: '0.2px solid black', width: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                                        <h4>#{contacto.id}</h4>
                                        <button onClick={() => despachador(borrarContacto(contacto.id))} style={{ marginLeft: '1.5rem' }}>X</button>
                                    </div>
                                    <p><b>Nombre:</b> <br></br> {contacto.nombre}</p>
                                    <p><b>Apellido:</b> <br></br> {contacto.apellido} </p>
                                    <p><b>Telefono:</b> <br></br> {contacto.telefono} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listaContactos: state.contactosReducer.contactos
    }
}

export default connect(mapStateToProps)(Home)