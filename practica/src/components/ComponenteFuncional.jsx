import React, { useState } from 'react'
import { connect } from 'react-redux'
import {agregarContacto} from '../actions/contactosActions'

const ComponenteFuncional = (props) => {

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault() 
                props.agregarContacto(state)
                }}>
                <p>Nombre: </p>
                <input name='nombre' value={state.nombre} type="text" onChange={(e) => handleChange(e)}/>
                <p>Apellido: </p>
                <input name='apellido' value={state.apellido} type="text" onChange={(e) => handleChange(e)}/>
                <p>Telefono: </p>
                <input name ='telefono' value={state.telefono} type="text" onChange={(e) => handleChange(e)}/>
                <div>
                <input type="submit" value='agregar contacto' />
                </div>
            </form>
        </div>
    )
}


export default connect(null, {agregarContacto})(ComponenteFuncional)
