import React from 'react'
import { agregarContacto } from '../actions/contactosActions'
import {connect} from 'react-redux'

class ComponenteClass extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                nombre: '',
                apellido: '',
                telefono: ''
            }
            this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault() 
                    this.props.agregarContacto(this.state)
                    }}>
                    <p>Nombre: </p>
                    <input name='nombre' value={this.state.nombre} type="text" onChange={(e) => this.handleChange(e)}/>
                    <p>Apellido: </p>
                    <input name='apellido' value={this.state.apellido} type="text" onChange={(e) => this.handleChange(e)}/>
                    <p>Telefono: </p>
                    <input name ='telefono' value={this.state.telefono} type="text" onChange={(e) => this.handleChange(e)}/>
                    <div>
                    <input type="submit" value='agregar contacto' />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {agregarContacto})(ComponenteClass)